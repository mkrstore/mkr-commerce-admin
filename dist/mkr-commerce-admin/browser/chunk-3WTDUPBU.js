// src/app/core/constants/app.constants.ts
var PASSWORD_MIN_LENGTH = 8;
var PASSWORD_REQUIREMENTS = [
  { label: "\u2191 Uppercase", test: (p) => /[A-Z]/.test(p) },
  { label: "\u2193 Lowercase", test: (p) => /[a-z]/.test(p) },
  { label: "# Number", test: (p) => /[0-9]/.test(p) },
  { label: "@ Symbol", test: (p) => /[@$!%*?&_#^]/.test(p) },
  { label: "8+ chars", test: (p) => p.length >= PASSWORD_MIN_LENGTH }
];

export {
  PASSWORD_REQUIREMENTS
};
//# sourceMappingURL=chunk-3WTDUPBU.js.map
