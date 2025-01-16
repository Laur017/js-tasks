export const maxTripletSum = (arr) =>
  [...new Set(arr)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, cur) => acc + cur, 0);
