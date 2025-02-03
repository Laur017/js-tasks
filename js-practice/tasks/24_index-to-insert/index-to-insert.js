export const indexToInsert = (arr, value) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= value) {
      return i;
    }
  }

  return arr.length;
};
