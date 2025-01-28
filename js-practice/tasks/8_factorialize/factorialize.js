export const factorialize = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorialize(n - 1);
};
