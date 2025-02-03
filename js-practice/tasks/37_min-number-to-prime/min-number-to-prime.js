export const minNumberToPrime = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  let num = 0;

  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  while (!isPrime(sum + num)) {
    num++;
  }

  return num;
};
