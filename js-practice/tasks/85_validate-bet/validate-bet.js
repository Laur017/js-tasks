export const validateBet = ([n, m], str) => {
  const arr = str
    .split(' ')
    .join(',')
    .split(',')
    .filter((i) => i)
    .sort((a, b) => +a - +b)
    .filter((i) => +i >= 1 && +i <= m);

  return [...new Set(arr)].length !== n ? null : arr;
};
