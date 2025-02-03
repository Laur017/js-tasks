export const calculatePrimorialOfANumber = (num) => {
  let count = 0;
  let current = 2;
  let result = 1;

  while (count < num) {
    if (isPrime(current)) {
      result *= current;
      count++;
    }
    current++;
  }
  return result;
};
const isPrime = (n) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};
