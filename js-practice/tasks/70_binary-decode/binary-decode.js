export const binaryDecode = (str = '') =>
  str
    .split(' ')
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join('');
