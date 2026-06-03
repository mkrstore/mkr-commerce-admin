// All field validation patterns and functions for the entire app.
// Import from here — never duplicate patterns in components.

export const PATTERNS = {
  ALPHA:       /^[A-Za-z]+$/,
  EMAIL:       /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  PHONE_IN:    /^[6-9]\d{9}$/,
  DIGITS_ONLY: /^\d+$/,
  POSTAL_IN:   /^\d{6}$/,
  ALPHA_SPACE: /^[A-Za-z\s]+$/,
};

export function validateName(value: string): string | null {
  const v = value.trim();
  if (!v) return null;
  if (!PATTERNS.ALPHA.test(v)) return 'Only letters A–Z are allowed';
  return null;
}

export function validateEmail(value: string): string | null {
  const v = value.trim();
  if (!v) return null;
  if (!PATTERNS.EMAIL.test(v)) return 'Enter a valid email address';
  return null;
}

export function validateIndianMobile(value: string): string | null {
  const v = value.trim();
  if (!v) return null;
  if (!PATTERNS.DIGITS_ONLY.test(v)) return 'Only digits 0–9 are allowed';
  if (v.length !== 10) return 'Enter exactly 10 digits';
  if (!/^[6-9]/.test(v)) return 'Must start with 6, 7, 8 or 9';
  return null;
}

export function validatePostalCode(value: string): string | null {
  const v = value.trim();
  if (!v) return null;
  if (!PATTERNS.POSTAL_IN.test(v)) return 'Enter a valid 6-digit PIN code';
  return null;
}

export function validateAlphaSpace(value: string): string | null {
  const v = value.trim();
  if (!v) return null;
  if (!PATTERNS.ALPHA_SPACE.test(v)) return 'Only letters and spaces are allowed';
  return null;
}
