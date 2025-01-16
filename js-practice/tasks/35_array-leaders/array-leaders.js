export const arrayLeaders = (arr) =>
  arr
    .map((el, i) => {
      if (el > arr.slice(i + 1, arr.length).reduce((acc, cur) => acc + cur, 0)) return el;
    })
    .filter((el) => el !== undefined);
