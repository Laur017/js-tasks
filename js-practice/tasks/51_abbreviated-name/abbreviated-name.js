export const abbreviatedName = (str) =>
  str
    .split(' ')
    .map((el, idx) => (idx === 0 ? el : `${el[0]}.`))
    .join(' ');
