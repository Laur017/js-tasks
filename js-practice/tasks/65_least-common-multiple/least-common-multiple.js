export const leastCommonMultiple = (a, b) => {
  let multiple = Math.max(a, b);

  while (!(multiple % a === 0 && multiple % b === 0)) {
    multiple++;
  }

  return multiple;
};
