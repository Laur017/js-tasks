export const equalSides = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr.slice(0, i).reduce((acc, cur) => acc + cur, 0) ===
      arr.slice(i + 1, arr.length).reduce((acc, cur) => acc + cur, 0)
    )
      return i;
  }

  return -1;
};
