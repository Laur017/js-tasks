export const romanNumbersConvert = (num) => {
  const ROMAN_NUMBERS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let str = '';
  for (let i of Object.keys(ROMAN_NUMBERS)) {
    let occurrence = Math.floor(num / ROMAN_NUMBERS[i]);
    num -= occurrence * ROMAN_NUMBERS[i];
    str += i.repeat(occurrence);
  }

  return str;
};
