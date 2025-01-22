export const bouncingBalls = (h, bounce, wind) => {
  let count = 0;
  while (h * bounce > wind) {
    h *= bounce;
    count += 2;
  }

  return count + 1;
};
