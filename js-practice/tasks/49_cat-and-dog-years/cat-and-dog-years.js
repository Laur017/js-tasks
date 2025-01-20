export const catAndDogYears = (n) => {
  let answ = [n, 15, 15];
  for (let i = 2; i <= n; i++) {
    if (i === 2) {
      answ[1] = answ[2] += 9;
    } else {
      answ[1] += 4;
      answ[2] += 5;
    }
  }
  return answ;
};
