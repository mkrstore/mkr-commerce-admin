import {
  Component, Output, EventEmitter, ElementRef,
  ViewChild, AfterViewInit, Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-image-captcha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-captcha.component.html',
  styleUrl: './image-captcha.component.scss'
})
export class ImageCaptchaComponent implements AfterViewInit {
  @Input() dark = false;
  @Output() verified = new EventEmitter<string>();

  @ViewChild('captchaCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private code = '';
  input        = '';
  isVerified   = false;
  hasError     = false;

  ngAfterViewInit() { this.generate(); }

  generate() {
    this.code       = Array.from({ length: 6 }, () => CHARS[rand(0, CHARS.length - 1)]).join('');
    this.input      = '';
    this.hasError   = false;
    this.isVerified = false;
    this.verified.emit('');
    setTimeout(() => this.draw(), 0);
  }

  verify() {
    if (!this.input.trim()) return;
    if (this.input.trim().toLowerCase() === this.code.toLowerCase()) {
      this.isVerified = true;
      this.hasError   = false;
      this.verified.emit(this.code);
    } else {
      this.hasError = true;
      this.input    = '';
      this.generate();
    }
  }

  reset() { this.generate(); }

  private draw() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;

    ctx.fillStyle = this.dark ? '#1e2432' : '#eef1fb';
    ctx.fillRect(0, 0, W, H);

    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(${rand(0,200)},${rand(0,200)},${rand(0,200)},0.25)`;
      ctx.beginPath();
      ctx.arc(rand(0, W), rand(0, H), rand(1, 2), 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = `rgba(${rand(80,180)},${rand(80,180)},${rand(80,180)},0.3)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(rand(0, W), rand(0, H));
      ctx.lineTo(rand(0, W), rand(0, H));
      ctx.stroke();
    }

    const step = W / (this.code.length + 1);
    for (let i = 0; i < this.code.length; i++) {
      ctx.save();
      ctx.translate(step * (i + 0.85) + rand(-3, 3), H / 2 + rand(-6, 6));
      ctx.rotate((rand(-22, 22) * Math.PI) / 180);
      ctx.font = `bold ${rand(22, 28)}px monospace`;
      ctx.fillStyle = this.dark
        ? `hsl(${rand(190, 270)},75%,72%)`
        : `hsl(${rand(210, 270)},65%,30%)`;
      ctx.fillText(this.code[i], 0, 0);
      ctx.restore();
    }
  }
}
