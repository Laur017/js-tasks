export const findLongestWord = (str) => {
  const arr = str.split(' ');
  let max = 0;
  for (const word of arr) {
    max = word.length > max ? word.length : max;
  }
  return max;
};
