import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService, CustomerType } from '../../../../services/customer.service';
import { AppBtnComponent, AppInputComponent, AppSelectComponent } from '../../../../shared/ui';
import type { SelectOption } from '../../../../shared/ui';
import { validateName, validateEmail, validateIndianMobile, validatePostalCode } from '../../../../core/utils/validation.utils';
import { extractErrorMessage } from '../../../../core/models/api.models';
import { Customer, BillItem } from '../../billing.types';
import { normalizePhone, priceFor } from '../../billing.utils';

@Component({
  selector: 'app-customer-section',
  standalone: true,
  imports: [CommonModule, FormsModule, AppBtnComponent, AppInputComponent, AppSelectComponent],
  templateUrl: './customer-section.component.html',
  styleUrl: './customer-section.component.scss',
})
export class CustomerSectionComponent {
  @Input() customer: Customer = { phone: '', name: '', email: '', address: '' };
  @Input() isExisting = false;
  @Input() items: BillItem[] = [];

  @Output() customerChange  = new EventEmitter<Customer>();
  @Output() isExistingChange = new EventEmitter<boolean>();
  @Output() itemsChange     = new EventEmitter<BillItem[]>();

  // Phone search state
  phoneDropdown: Customer[] = [];
  showPhoneDropdown = false;
  customerSearching = false;
  customerStatus: 'idle' | 'found' | 'new' = 'idle';
  private knownCustomers: Customer[] = [];
  private searchTimer: ReturnType<typeof setTimeout> | null = null;

  // Field touch tracking for validation display
  nameTouched  = false;
  phoneTouched = false;
  emailTouched = false;

  // New customer modal state
  showModal    = false;
  saving       = false;
  modalError   = '';
  modalTouched = false;
  showAddress  = false;

  form = {
    firstName: '', lastName: '', phone: '', email: '',
    type: 'RETAIL' as CustomerType,
    addressStreet: '', addressCity: '', addressMandal: '',
    addressDistrict: '', addressState: '', addressPostalCode: '',
  };

  readonly typeOpts: SelectOption[] = [
    { value: 'RETAIL',    label: 'Retail' },
    { value: 'WHOLESALE', label: 'Wholesale' },
    { value: 'BROKER',    label: 'Broker' },
  ];

  typeLabel(type?: string): string {
    return this.typeOpts.find(o => o.value === type)?.label ?? (type ?? '');
  }

  get firstNameError()  { return this.modalTouched ? validateName(this.form.firstName) : null; }
  get lastNameError()   { return this.modalTouched ? validateName(this.form.lastName)  : null; }
  get modalPhoneError() { return this.modalTouched ? validateIndianMobile(this.form.phone) : null; }
  get modalEmailError() { return this.modalTouched ? validateEmail(this.form.email) : null; }
  get postalError()     { return this.modalTouched ? validatePostalCode(this.form.addressPostalCode) : null; }

  get nameError(): string | null {
    if (!this.nameTouched) return null;
    if (!this.customer.name.trim()) return 'Name is required';
    if (this.customer.name.trim().length < 2) return 'Too short';
    return null;
  }

  get phoneError(): string | null {
    if (!this.phoneTouched) return null;
    if (!this.customer.phone.trim()) return 'Phone is required';
    if (this.customer.phone.trim().length !== 10) return 'Must be 10 digits';
    return null;
  }

  get emailError(): string | null {
    if (!this.emailTouched) return null;
    const v = this.customer.email.trim();
    if (!v) return null;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Invalid email';
    return null;
  }

  constructor(private customerSvc: CustomerService) {}

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const pos = input.selectionStart ?? input.value.length;
    // digits only, strip 91 country prefix, max 10
    let cleaned = normalizePhone(input.value);
    // block first digit 0-5
    if (cleaned.length > 0 && /^[012345]/.test(cleaned)) cleaned = cleaned.slice(1);
    cleaned = cleaned.slice(0, 10);
    const finalPos = Math.max(0, Math.min(pos, cleaned.length));
    input.value = cleaned;
    input.setSelectionRange(finalPos, finalPos);
    Promise.resolve().then(() => {
      if (document.activeElement === input) input.setSelectionRange(finalPos, finalPos);
    });
    this.onPhoneChange(cleaned);
  }

  onPhoneChange(normalized: string) {
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.customerSearching = false;
    this.emit({ ...this.customer, phone: normalized });

    if (this.searchTimer) { clearTimeout(this.searchTimer); this.searchTimer = null; }

    if (!normalized) {
      this.customerStatus = 'idle';
      return;
    }

    this.searchTimer = setTimeout(() => {
      this.customerSearching = true;
      this.search(normalized);
    }, 500);
  }

  onNameChange(name: string) {
    this.nameTouched = true;
    this.emit({ ...this.customer, name: name.replace(/[^a-zA-Z .'-]/g, '') });
  }

  onEmailChange(email: string) {
    this.emailTouched = true;
    this.emit({ ...this.customer, email });
  }

  onAddressChange(address: string) {
    this.emit({ ...this.customer, address });
  }

  private search(q: string) {
    this.customerSvc.list({ search: q, size: 6 }).subscribe({
      next: res => {
        const list: Customer[] = res.content.map(c => ({
          id: c.id, phone: c.phone ?? '', name: c.name,
          email: c.email ?? '', address: '',
          pendingAmount: c.pendingAmount, type: c.type,
        }));
        // Exact 10-digit match → auto-select
        const exact = q.length === 10 ? list.find(c => normalizePhone(c.phone) === q) : null;
        if (exact) {
          this.select(exact);
          this.customerStatus = 'found';
          this.phoneDropdown = [];
          this.showPhoneDropdown = false;
        } else if (list.length > 0) {
          this.phoneDropdown = list;
          this.showPhoneDropdown = true;
          this.customerStatus = 'idle';
        } else {
          this.phoneDropdown = [];
          this.showPhoneDropdown = false;
          this.customerStatus = 'new';
        }
        this.customerSearching = false;
      },
      error: () => {
        this.phoneDropdown = [];
        this.showPhoneDropdown = false;
        this.customerStatus = 'new';
        this.customerSearching = false;
      },
    });
  }

  selectFromDropdown(c: Customer) {
    this.select(c);
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
    this.customerStatus = 'found';
    if (c.id) {
      this.customerSvc.getById(c.id).subscribe({
        next: detail => {
          const parts = [
            detail.addressStreet, detail.addressCity, detail.addressMandal,
            detail.addressDistrict, detail.addressState, detail.addressPostalCode,
          ].filter(Boolean);
          if (parts.length > 0) this.emit({ ...this.customer, address: parts.join(', ') });
        }
      });
    }
  }

  private select(c: Customer) {
    const prevType = this.customer.type;
    const updated = { ...c, phone: normalizePhone(c.phone) };
    this.phoneTouched = true;
    this.nameTouched  = true;
    this.isExistingChange.emit(true);
    this.emit(updated);
    if (c.type && c.type !== prevType) {
      const repriced = this.items.map(i => ({ ...i, unitPrice: priceFor(i.product, c.type) }));
      this.itemsChange.emit(repriced);
    }
  }

  clearCustomer() {
    if (this.searchTimer) { clearTimeout(this.searchTimer); this.searchTimer = null; }
    this.emit({ phone: '', name: '', email: '', address: '' });
    this.isExistingChange.emit(false);
    this.phoneTouched = false;
    this.nameTouched  = false;
    this.emailTouched = false;
    this.customerStatus = 'idle';
    this.customerSearching = false;
    this.phoneDropdown = [];
    this.showPhoneDropdown = false;
  }

  closeDropdown() { setTimeout(() => { this.showPhoneDropdown = false; }, 150); }

  openModal() {
    this.form = {
      firstName: '', lastName: '', phone: this.customer.phone, email: '',
      type: 'RETAIL', addressStreet: '', addressCity: '', addressMandal: '',
      addressDistrict: '', addressState: '', addressPostalCode: '',
    };
    this.modalError   = '';
    this.modalTouched = false;
    this.showAddress  = false;
    this.showModal    = true;
    this.showPhoneDropdown = false;
    this.customerStatus = 'idle';
  }

  closeModal() { this.showModal = false; this.modalError = ''; }

  submitModal() {
    this.modalTouched = true;
    const f = this.form;
    if (!f.firstName.trim() || !f.lastName.trim() || !f.phone.trim()) return;
    if (validateName(f.firstName) || validateName(f.lastName)) return;
    if (validateIndianMobile(f.phone)) return;
    if (f.email.trim() && validateEmail(f.email)) return;
    if (f.addressPostalCode.trim() && validatePostalCode(f.addressPostalCode)) return;

    this.saving = true;
    this.modalError = '';

    this.customerSvc.create({
      firstName:         f.firstName.trim(),
      lastName:          f.lastName.trim(),
      phone:             f.phone.trim(),
      email:             f.email.trim() || null,
      type:              f.type,
      addressStreet:     f.addressStreet.trim()   || null,
      addressCity:       f.addressCity.trim()     || null,
      addressMandal:     f.addressMandal.trim()   || null,
      addressDistrict:   f.addressDistrict.trim() || null,
      addressState:      f.addressState.trim()    || null,
      addressPostalCode: f.addressPostalCode.trim() || null,
    }).subscribe({
      next: created => {
        this.saving    = false;
        this.showModal = false;
        this.selectFromDropdown({
          id:            created.id,
          phone:         created.phone ?? f.phone.trim(),
          name:          `${f.firstName.trim()} ${f.lastName.trim()}`,
          email:         created.email ?? f.email.trim(),
          address:       '',
          pendingAmount: 0,
          type:          f.type,
        });
      },
      error: err => {
        this.modalError = extractErrorMessage(err);
        this.saving = false;
      }
    });
  }

  private emit(c: Customer) { this.customerChange.emit(c); }
}
