export const checkPasswordStrength = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;

  if (isLongEnough && hasUpperCase && hasSpecialChar) {
    return "strong";
  } else if (hasUpperCase || hasSpecialChar) {
    return "medium";
  } else {
    return "weak";
  }
};
