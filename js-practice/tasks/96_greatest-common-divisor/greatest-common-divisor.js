export const greatestCommonDivisor = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  if (num1 === num2) {
    return num1;
  }
  return greatestCommonDivisor(max - min, min);
};
