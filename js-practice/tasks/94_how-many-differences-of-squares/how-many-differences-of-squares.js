export const squares = (num) => {
  let arr = [];

  const checkDifSquare = (n) => {
    let first = Math.ceil(n / 2);
    let second = first;

    while (first > 1) {
      second--;
      if (first ** 2 - second ** 2 > n) {
        first--;
        second = first;
      }
      if (first ** 2 - second ** 2 === n) {
        return true;
      }

      if (second < 0) {
        first--;
        second = first;
      }
    }
    return false;
  };

  for (let i = 1; i <= num; i++) {
    arr.push(checkDifSquare(i));
  }
  return arr.filter((i) => i).length + 1;
};
