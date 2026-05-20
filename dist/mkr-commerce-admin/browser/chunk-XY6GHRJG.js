// src/app/core/models/api.models.ts
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2["ACCESS_TOKEN_EXPIRED"] = "ACCESS_TOKEN_EXPIRED";
  ErrorCode2["ACCESS_TOKEN_INVALID"] = "ACCESS_TOKEN_INVALID";
  ErrorCode2["REFRESH_TOKEN_INVALID"] = "REFRESH_TOKEN_INVALID";
  ErrorCode2["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
  ErrorCode2["ACCOUNT_DEACTIVATED"] = "ACCOUNT_DEACTIVATED";
  ErrorCode2["GOOGLE_LOGIN_REQUIRED"] = "GOOGLE_LOGIN_REQUIRED";
  ErrorCode2["RESET_TOKEN_INVALID"] = "RESET_TOKEN_INVALID";
  ErrorCode2["RESET_TOKEN_EXPIRED"] = "RESET_TOKEN_EXPIRED";
  ErrorCode2["PASSWORD_RECENTLY_USED"] = "PASSWORD_RECENTLY_USED";
  ErrorCode2["CAPTCHA_FAILED"] = "CAPTCHA_FAILED";
  ErrorCode2["INVITATION_TOKEN_INVALID"] = "INVITATION_TOKEN_INVALID";
  ErrorCode2["INVITATION_TOKEN_EXPIRED"] = "INVITATION_TOKEN_EXPIRED";
  ErrorCode2["ROLE_NOT_PERMITTED"] = "ROLE_NOT_PERMITTED";
  ErrorCode2["VALIDATION_ERROR"] = "VALIDATION_ERROR";
  ErrorCode2["RESOURCE_NOT_FOUND"] = "RESOURCE_NOT_FOUND";
  ErrorCode2["FORBIDDEN"] = "FORBIDDEN";
  ErrorCode2["INSUFFICIENT_STOCK"] = "INSUFFICIENT_STOCK";
  ErrorCode2["DUPLICATE_EMAIL"] = "DUPLICATE_EMAIL";
  ErrorCode2["INVALID_PROMO_CODE"] = "INVALID_PROMO_CODE";
  ErrorCode2["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ErrorCode || (ErrorCode = {}));
function extractErrorMessage(error, fallback = "Something went wrong. Please try again.") {
  if (!error)
    return fallback;
  if (error.status === 0) {
    return "Cannot reach the server. Please check your connection or try again later.";
  }
  const body = error?.error;
  if (typeof body === "string" && (body.trimStart().startsWith("<") || body.includes("<!DOCTYPE"))) {
    return "Server is unreachable. Please try again later.";
  }
  const code = body?.errorCode;
  if (code) {
    switch (code) {
      case ErrorCode.INVALID_CREDENTIALS:
        return "Invalid email or password.";
      case ErrorCode.ACCOUNT_DEACTIVATED:
        return "Your account has been deactivated. Please contact your administrator.";
      case ErrorCode.GOOGLE_LOGIN_REQUIRED:
        return 'This account uses Google Sign-In. Please use "Continue with Google".';
      case ErrorCode.ACCESS_TOKEN_EXPIRED:
        return "Your session has expired. Please log in again.";
      case ErrorCode.ACCESS_TOKEN_INVALID:
        return "Invalid session. Please log in again.";
      case ErrorCode.REFRESH_TOKEN_INVALID:
        return "Your session has expired. Please log in again.";
      case ErrorCode.CAPTCHA_FAILED:
        return "CAPTCHA verification failed. Please try again.";
      case ErrorCode.RESET_TOKEN_EXPIRED:
        return "This reset link has expired. Please request a new one.";
      case ErrorCode.RESET_TOKEN_INVALID:
        return "This reset link is invalid or has already been used.";
      case ErrorCode.INVITATION_TOKEN_EXPIRED:
        return "This invitation link has expired. Please ask your admin to resend it.";
      case ErrorCode.INVITATION_TOKEN_INVALID:
        return "This invitation link is invalid or has already been used.";
      case ErrorCode.PASSWORD_RECENTLY_USED:
        return body?.message ?? "You cannot reuse a recent password. Please choose a different one.";
      case ErrorCode.DUPLICATE_EMAIL:
        return "An account with this email already exists.";
      case ErrorCode.FORBIDDEN:
      case ErrorCode.ROLE_NOT_PERMITTED:
        return body?.message ?? "You don't have permission to perform this action.";
      case ErrorCode.RESOURCE_NOT_FOUND:
        return "The requested resource was not found.";
      case ErrorCode.VALIDATION_ERROR:
        return body?.message ?? "Please check your input and try again.";
      case ErrorCode.INTERNAL_ERROR:
        return "Something went wrong on the server. Please try again.";
    }
  }
  if (body?.message)
    return body.message;
  switch (error.status) {
    case 400:
      return "Invalid request. Please check your input.";
    case 401:
      return "Authentication required. Please log in.";
    case 403:
      return "You don't have permission to perform this action.";
    case 404:
      return "The requested resource was not found.";
    case 409:
      return "A conflict occurred. Please try again.";
    case 429:
      return "Too many requests. Please wait a moment and try again.";
    case 500:
      return "Something went wrong on the server. Please try again.";
    case 502:
    case 503:
    case 504:
      return "Server is temporarily unavailable. Please try again later.";
  }
  return fallback;
}
function extractErrorCode(error) {
  const code = error?.error?.errorCode;
  return code ? code : null;
}

export {
  ErrorCode,
  extractErrorMessage,
  extractErrorCode
};
//# sourceMappingURL=chunk-XY6GHRJG.js.map
