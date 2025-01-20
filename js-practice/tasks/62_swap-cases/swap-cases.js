export const swapCases = (str) =>
  [...str].map((el) => (el.charCodeAt() > 64 && el.charCodeAt() < 91 ? el.toLowerCase() : el.toUpperCase())).join('');
