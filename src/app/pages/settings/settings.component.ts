import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopSettingsService, ShopSettings } from '../../services/shop-settings.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  settings!: ShopSettings;
  saved = false;
  expanded: Set<string> = new Set(['shop']); // 'shop' open by default

  constructor(public theme: ThemeService, private svc: ShopSettingsService) {}

  ngOnInit() { this.settings = this.svc.get(); }

  toggle(section: string) {
    this.expanded.has(section) ? this.expanded.delete(section) : this.expanded.add(section);
  }

  isOpen(section: string) { return this.expanded.has(section); }

  save() {
    this.svc.save(this.settings);
    this.saved = true;
    setTimeout(() => this.saved = false, 2500);
  }
}
