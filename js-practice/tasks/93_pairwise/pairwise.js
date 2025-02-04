export const pairwise = (arr, arg) => {
  let sum = 0;
  const used = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (used.has(i)) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (!used.has(j) && arr[i] + arr[j] === arg) {
        sum += i + j;
        used.add(i);
        used.add(j);
        break;
      }
    }
  }

  return sum;
};
