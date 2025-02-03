export const spinalCase = (str) =>
  str
    .split(/(?=[A-Z])|\s|\/|_/)
    .join('-')
    .toLowerCase();
