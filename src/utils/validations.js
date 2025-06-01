// Valida que el campo no esté vacío
export function isNotEmpty(value) {
  return value !== undefined && value !== null && value.toString().trim() !== '';
}

// Valida que el nombre solo contenga letras y espacios
export function isValidName(name) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(name.trim());
}

// Valida formato de correo electrónico
export function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Valida que el mensaje tenga una longitud mínima (ejemplo: 10 caracteres)
export function isValidMessage(message, minLength = 10) {
  return typeof message === 'string' && message.trim().length >= minLength;
}

// Valida que el captcha esté presente
export function isCaptchaValid(captcha) {
  return !!captcha;
}