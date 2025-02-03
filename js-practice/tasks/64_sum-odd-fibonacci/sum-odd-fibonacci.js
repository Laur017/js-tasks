export const sumOddFibonacci = (num) => {
  let arr = [];
  let i = 0;
  while (fibonacci(i) <= num) {
    arr.push(fibonacci(i));
    i++;
  }
  return arr.filter((el) => el % 2 !== 0).reduce((acc, cur) => acc + cur, 0);
};

const fibonacci = (n) => {
  if (n < 2) {
    return 1;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
};
