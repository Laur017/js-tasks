export const maxProduct = (arr) => {
  let max = Math.min(...arr);
  for (let i = 0; i < arr.length - 1; i++) {
    max = max > arr[i] * arr[i + 1] ? max : arr[i] * arr[i + 1];
  }

  return max;
};
