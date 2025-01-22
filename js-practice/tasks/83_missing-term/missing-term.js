export const missingTerm = (arr) => {
  let progress = Math.min(arr[1] - arr[0], arr[2] - arr[1]);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + progress !== arr[i + 1]) return arr[i] + progress;
  }
  return -1;
};
