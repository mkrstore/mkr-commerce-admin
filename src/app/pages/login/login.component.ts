import { Component }                    from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { Location }                     from '@angular/common';
import { ActivatedRoute, Router }       from '@angular/router';
import { AuthService }                  from '../../services/auth.service';
import { ThemeService }                 from '../../services/theme.service';
import { ROLE_META, ROLE_ORDER }        from '../../core/constants/roles.constants';
import { extractErrorMessage }          from '../../core/models/api.models';

type ModalState = 'closed' | 'form' | 'sent';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // ── Login form ──────────────────────────────────────────────────────────
  identifier  = '';
  password    = '';
  showPwd     = false;
  loading = false;
  error   = '';

  // ── Forgot password modal ───────────────────────────────────────────────
  modal: ModalState = 'closed';
  fpEmail   = '';
  fpLoading = false;
  fpError   = '';

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
    if (!this.identifier.trim() || !this.password) {
      this.error = 'Please enter your email or phone and password.';
      return;
    }
    this.loading = true;
    this.auth.login(this.identifier.trim(), this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (e) => {
        this.error   = extractErrorMessage(e, 'Sign in failed. Please try again.');
        this.loading = false;
      }
    });
  }

  loginWithGoogle() { this.auth.loginWithGoogle(); }

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
    if (!this.fpEmail.trim()) {
      this.fpError = 'Please enter your email address.';
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
}
