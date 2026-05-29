import { Component }                    from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { Location }                     from '@angular/common';
import { ActivatedRoute, Router }       from '@angular/router';
import { AuthService }                  from '../../services/auth.service';
import { ThemeService }                 from '../../services/theme.service';
import { ROLE_META, ROLE_ORDER }        from '../../core/constants/roles.constants';
import { extractErrorMessage, ErrorCode, extractErrorCode } from '../../core/models/api.models';
import { PASSWORD_MIN_LENGTH }          from '../../core/constants/app.constants';
import { environment }                  from '../../../environments/environment';

type ModalState  = 'closed' | 'form' | 'sent';
type LoginScreen = 'login' | 'setPassword' | 'directReset';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // ── Screen ──────────────────────────────────────────────────────────────
  screen: LoginScreen = 'login';

  // ── Login form ──────────────────────────────────────────────────────────
  identifier  = '';
  password    = '';
  showPwd     = false;
  loading = false;
  error   = '';
  identifierError = '';
  passwordError   = '';

  // ── Set password screen (first-time dev flow) ────────────────────────────
  spNewPwd     = '';
  spConfirmPwd = '';
  spShowPwd    = false;
  spLoading    = false;
  spError      = '';
  spPwdError   = '';

  // ── Direct reset screen (dev — no email token) ──────────────────────────
  drNewPwd     = '';
  drConfirmPwd = '';
  drShowPwd    = false;
  drLoading    = false;
  drError      = '';
  drPwdError   = '';

  // ── Forgot password modal ───────────────────────────────────────────────
  modal: ModalState = 'closed';
  fpEmail   = '';
  fpLoading = false;
  fpError   = '';

  readonly isDev = !environment.production;

  readonly roleCards = ROLE_ORDER.map(r => ({
    icon:  ROLE_META[r].icon,
    name:  ROLE_META[r].name,
    desc:  ROLE_META[r].description,
    color: ROLE_META[r].color,
  }));

  private static readonly ERROR_MESSAGES: Record<string, string> = {
    user_not_found:      'No staff account found for this Google email. Contact your admin.',
    account_deactivated: 'Your account has been deactivated. Contact your admin.',
    missing_email:       'Google did not share your email address. Please try again.',
    server_error:        'Service temporarily unavailable. Please try again later.',
    oauth_failed:        'Google sign-in failed. Please try again.',
  };

  constructor(
    public  theme:    ThemeService,
    private auth:     AuthService,
    private router:   Router,
    private route:    ActivatedRoute,
    private location: Location,
  ) {
    const code = this.route.snapshot.queryParams['error'];
    if (code) {
      // OAuth failed — show error regardless of any existing session.
      this.error = LoginComponent.ERROR_MESSAGES[code] ?? 'Google sign-in failed. Please try again.';
      this.location.replaceState('/login');
      return;
    }

    if (this.auth.isLoggedIn()) this.router.navigate(['/dashboard']);
  }

  // ── Login ───────────────────────────────────────────────────────────────

  login() {
    this.error = '';
    this.identifierError = '';
    this.passwordError = '';
    const id = this.identifier.trim();

    if (!id) {
      this.error = 'Please enter your email or phone number.';
      return;
    }
    if (id.includes('@')) {
      if (!this.isValidEmail(id)) {
        this.error = 'Please enter a valid email address (e.g. you@company.com).';
        return;
      }
    } else {
      if (!this.isValidPhone(id)) {
        this.error = 'Please enter a valid 10-digit mobile number starting with 6–9.';
        return;
      }
    }
    if (!this.password) {
      this.error = 'Please enter your password.';
      return;
    }
    if (this.password.length < PASSWORD_MIN_LENGTH) {
      this.error = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
      return;
    }

    this.loading = true;
    this.auth.login(id, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (e) => {
        const code = extractErrorCode(e);
        if (code === ErrorCode.INVITATION_TOKEN_INVALID) {
          // Account exists but password not set yet — show set-password screen
          this.loading = false;
          this.screen  = 'setPassword';
          this.spError = '';
          return;
        }
        this.error   = extractErrorMessage(e, 'Sign in failed. Please try again.');
        this.loading = false;
      }
    });
  }

  private isValidEmail(v: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  }

  private isValidPhone(v: string): boolean {
    return /^[6-9]\d{9}$/.test(v);
  }

  loginWithGoogle() { this.auth.loginWithGoogle(); }

  onIdentifierInput() {
    this.error = '';
    const id = this.identifier;
    if (!id) { this.identifierError = ''; return; }
    if (id.includes('@')) {
      this.identifierError = this.isValidEmail(id) ? '' : 'Enter a valid email address.';
    } else {
      if (id.length < 10) { this.identifierError = ''; return; }
      this.identifierError = this.isValidPhone(id) ? '' : 'Enter a valid 10-digit mobile number starting with 6–9.';
    }
  }

  onPasswordInput() {
    this.error = '';
    this.passwordError = this.password.length > 0 && this.password.length < PASSWORD_MIN_LENGTH
      ? `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`
      : '';
  }

  // ── Set first password screen ───────────────────────────────────────────

  backToLogin() {
    this.screen      = 'login';
    this.spError     = '';
    this.spPwdError  = '';
    this.spNewPwd    = '';
    this.spConfirmPwd = '';
  }

  onSpPwdInput() {
    this.spError = '';
    this.spPwdError = this.spNewPwd.length > 0 && this.spNewPwd.length < PASSWORD_MIN_LENGTH
      ? `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`
      : '';
  }

  setFirstPassword() {
    this.spError    = '';
    this.spPwdError = '';
    if (!this.spNewPwd) {
      this.spError = 'Please enter a new password.';
      return;
    }
    if (this.spNewPwd.length < PASSWORD_MIN_LENGTH) {
      this.spPwdError = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
      return;
    }
    if (this.spNewPwd !== this.spConfirmPwd) {
      this.spError = 'Passwords do not match.';
      return;
    }
    this.spLoading = true;
    this.auth.setFirstPassword(this.identifier.trim(), this.spNewPwd).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (e) => {
        this.spError   = extractErrorMessage(e, 'Failed to set password. Please try again.');
        this.spLoading = false;
      }
    });
  }

  // ── Forgot password modal ───────────────────────────────────────────────

  openForgotPassword() {
    this.fpEmail   = this.identifier.includes('@') ? this.identifier : '';
    this.fpError   = '';
    this.modal     = 'form';
  }

  closeForgotPassword() {
    this.modal     = 'closed';
    this.fpEmail   = '';
    this.fpError   = '';
    this.fpLoading = false;
  }

  sendResetLink() {
    this.fpError = '';
    const email = this.fpEmail.trim();
    if (!email) {
      this.fpError = 'Please enter your email address.';
      return;
    }
    if (!this.isValidEmail(email)) {
      this.fpError = 'Please enter a valid email address (e.g. you@company.com).';
      return;
    }
    this.fpLoading = true;
    this.auth.forgotPassword(this.fpEmail.trim()).subscribe({
      next: () => { this.fpLoading = false; this.modal = 'sent'; },
      error: (e) => {
        this.fpError   = extractErrorMessage(e);
        this.fpLoading = false;
      }
    });
  }

  // ── Direct reset (dev — skip email link) ───────────────────────────────

  switchToDirectReset() {
    const email = this.fpEmail.trim();
    if (!email) {
      this.fpError = 'Please enter your email address first.';
      return;
    }
    if (!this.isValidEmail(email)) {
      this.fpError = 'Please enter a valid email address.';
      return;
    }
    this.modal      = 'closed';
    this.screen     = 'directReset';
    this.drError    = '';
    this.drPwdError = '';
    this.drNewPwd   = '';
    this.drConfirmPwd = '';
  }

  onDrPwdInput() {
    this.drError = '';
    this.drPwdError = this.drNewPwd.length > 0 && this.drNewPwd.length < PASSWORD_MIN_LENGTH
      ? `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`
      : '';
  }

  doDirectReset() {
    this.drError    = '';
    this.drPwdError = '';
    if (!this.drNewPwd) {
      this.drError = 'Please enter a new password.';
      return;
    }
    if (this.drNewPwd.length < PASSWORD_MIN_LENGTH) {
      this.drPwdError = `Password must be at least ${PASSWORD_MIN_LENGTH} characters.`;
      return;
    }
    if (this.drNewPwd !== this.drConfirmPwd) {
      this.drError = 'Passwords do not match.';
      return;
    }
    this.drLoading = true;
    this.auth.devResetPassword(this.fpEmail.trim(), this.drNewPwd).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (e) => {
        this.drError   = extractErrorMessage(e, 'Failed to reset password. Please try again.');
        this.drLoading = false;
      }
    });
  }
}
