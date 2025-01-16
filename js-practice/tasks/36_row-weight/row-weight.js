export const rowWeights = (arr) => {
  let weights = [0, 0];
  arr.forEach((el, i) => (weights[i % 2] += el));
  return weights;
};
