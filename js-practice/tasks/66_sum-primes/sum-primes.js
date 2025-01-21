export const sumPrimes = (num) => {
  let sum = 0;
  const isPrime = (n) => {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    sum += isPrime(i) ? i : 0;
  }

  return sum;
};
