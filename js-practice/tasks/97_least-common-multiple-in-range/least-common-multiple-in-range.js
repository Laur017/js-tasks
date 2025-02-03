export const leastCommonMultipleInRange = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let commonMultiple = max;

  const smallestCommonMultiple = (low, high) => {
    const smallestCommon = (l, h) => {
      if (h % l === 0) {
        return h;
      }
      return smallestCommon(l, h + high);
    };
    return smallestCommon(low, high);
  };

  for (let i = min; i <= max; i++) {
    commonMultiple = smallestCommonMultiple(i, commonMultiple);
  }

  return commonMultiple;
};
