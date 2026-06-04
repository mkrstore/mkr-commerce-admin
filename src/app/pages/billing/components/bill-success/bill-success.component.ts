import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavedBill } from '../../billing.types';
import { inr, fmtDate, fmtTime, payLabel, payIconName } from '../../billing.utils';

@Component({
  selector: 'app-bill-success',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bill-success.component.html',
  styleUrl: './bill-success.component.scss',
})
export class BillSuccessComponent {
  @Input() bill!: SavedBill;
  @Input() printLoading  = false;
  @Input() pdfLoading    = false;
  @Input() emailSending  = false;
  @Input() emailSentMsg  = '';
  @Input() showEmailInput = false;
  @Input() shareEmailTo   = '';
  @Input() whatsappSending = false;

  @Output() print        = new EventEmitter<void>();
  @Output() download     = new EventEmitter<void>();
  @Output() email        = new EventEmitter<string | undefined>();
  @Output() whatsapp     = new EventEmitter<void>();
  @Output() newBill      = new EventEmitter<void>();
  @Output() shareEmailToChange = new EventEmitter<string>();

  inr = inr;
  fmtDate = fmtDate;
  fmtTime = fmtTime;
  payLabel = payLabel;
  payIconName = payIconName;
}
