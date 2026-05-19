import { Component, OnInit }     from '@angular/core';
import { CommonModule }           from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService }            from '../../services/auth.service';

@Component({
  selector: 'app-oauth2-callback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cb-wrap">
      <div class="cb-spinner"></div>
      <div class="cb-msg">Completing sign in…</div>
    </div>
  `,
  styles: [`
    .cb-wrap {
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      height: 100vh; font-family: sans-serif; gap: 14px;
      background: #F9FAFB;
    }
    .cb-spinner {
      width: 38px; height: 38px;
      border: 3px solid #E5E7EB;
      border-top-color: #6366F1;
      border-radius: 50%;
      animation: spin 0.75s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .cb-msg { color: #6B7280; font-size: 14px; }
  `]
})
export class OAuth2CallbackComponent implements OnInit {

  constructor(
    private route:  ActivatedRoute,
    private router: Router,
    private auth:   AuthService,
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    const token  = params['token'];

    if (!token) {
      this.router.navigate(['/login'], { queryParams: { error: 'oauth_failed' }, replaceUrl: true });
      return;
    }

    this.auth.restoreFromOAuth(token).subscribe({
      next:  () => this.router.navigate(['/dashboard'], { replaceUrl: true }),
      error: () => this.router.navigate(['/login'], { queryParams: { error: 'server_error' }, replaceUrl: true }),
    });
  }
}
