export const diffArray = (arr1, arr2) =>
  arr1.filter((el) => !arr2.includes(el)).concat(arr2.filter((el) => !arr1.includes(el)));
