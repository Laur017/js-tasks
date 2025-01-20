export const sumAllNumbersInRange = (arr) => {
  let s = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    s += i;
  }

  return s;
};
