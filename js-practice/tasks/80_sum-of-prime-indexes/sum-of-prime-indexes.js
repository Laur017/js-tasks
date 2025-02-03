export const sumOfPrimeIndexes = (arr) => arr.filter((_, idx) => isPrime(idx)).reduce((acc, cur) => acc + cur, 0);
const isPrime = (n) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};
