export const unpackElements = (arr) =>
  arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? unpackElements(cur) : cur), []);
