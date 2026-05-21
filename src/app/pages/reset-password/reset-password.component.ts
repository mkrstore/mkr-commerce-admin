import { Component, OnInit }       from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { ActivatedRoute, Router }   from '@angular/router';
import { AuthService }              from '../../services/auth.service';
import { ThemeService }             from '../../services/theme.service';
import { PASSWORD_REQUIREMENTS, PASSWORD_PATTERN } from '../../core/constants/app.constants';
import { extractErrorMessage }      from '../../core/models/api.models';

type PageState = 'validating' | 'invalid' | 'form' | 'submitting' | 'success';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {

  state: PageState = 'validating';
  maskedEmail  = '';
  tokenFromUrl = '';

  newPassword     = '';
  confirmPassword = '';
  showNew         = false;
  showConfirm     = false;
  error           = '';
  newPwDirty      = false;

  get newPwInvalid(): boolean {
    return this.newPwDirty && this.newPassword.length > 0 && !PASSWORD_PATTERN.test(this.newPassword);
  }

  onNewPwInput() {
    this.newPwDirty = true;
    this.error = '';
  }

  get strength(): { score: number; label: string; color: string } {
    const p = this.newPassword;
    if (!p) return { score: 0, label: '', color: '' };
    let score = 0;
    if (p.length >= 8)       score++;
    if (p.length >= 12)      score++;
    if (this.hasUpper(p))    score++;
    if (this.hasLower(p))    score++;
    if (this.hasDigit(p))    score++;
    if (this.hasSymbol(p))   score++;
    if (score <= 2) return { score, label: 'Weak',   color: '#ef4444' };
    if (score <= 4) return { score, label: 'Fair',   color: '#f59e0b' };
    if (score <= 5) return { score, label: 'Good',   color: '#3b82f6' };
    return            { score, label: 'Strong', color: '#16a34a' };
  }

  get passwordsMatch(): boolean {
    return !!this.confirmPassword && this.newPassword === this.confirmPassword;
  }

  readonly requirements = PASSWORD_REQUIREMENTS;
  hasUpper(p: string)  { return PASSWORD_REQUIREMENTS[0].test(p); }
  hasLower(p: string)  { return PASSWORD_REQUIREMENTS[1].test(p); }
  hasDigit(p: string)  { return PASSWORD_REQUIREMENTS[2].test(p); }
  hasSymbol(p: string) { return PASSWORD_REQUIREMENTS[3].test(p); }
  minLength(p: string) { return PASSWORD_REQUIREMENTS[4].test(p); }

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private auth:   AuthService,
    public  theme:  ThemeService
  ) {}

  ngOnInit() {
    this.tokenFromUrl = this.route.snapshot.queryParamMap.get('token') ?? '';
    if (!this.tokenFromUrl) { this.state = 'invalid'; return; }
    this.validateToken();
  }

  private validateToken() {
    this.auth.validateResetToken(this.tokenFromUrl).subscribe({
      next: res => {
        if (res.data?.valid) {
          this.maskedEmail = res.data.maskedEmail ?? '';
          this.state       = 'form';
        } else {
          this.state = 'invalid';
        }
      },
      error: () => { this.state = 'invalid'; }
    });
  }

  submit() {
    this.error = '';
    if (!this.newPassword) {
      this.error = 'Please enter a new password.';
      return;
    }
    if (!PASSWORD_PATTERN.test(this.newPassword)) {
      this.error = 'Password must be 8+ characters with uppercase, lowercase, number and symbol (@$!%*?&_#^).';
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }
    this.state = 'submitting';
    this.auth.resetPassword(this.tokenFromUrl, this.newPassword).subscribe({
      next: () => { this.state = 'success'; },
      error: (e) => {
        this.error = extractErrorMessage(e, 'Reset failed. Please try again.');
        this.state = 'form';
      }
    });
  }

  goToLogin() { this.router.navigate(['/login']); }
}
