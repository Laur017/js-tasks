export const expressionsMatter = (a, b, c) => {
  let firstPart = b + Math.min(a, c) > b * Math.min(a, c) ? b + Math.min(a, c) : b * Math.min(a, c);
  let secondPart = Math.max(a, c);
  if (firstPart + secondPart > firstPart * secondPart) return firstPart + secondPart;
  return firstPart * secondPart;
};
