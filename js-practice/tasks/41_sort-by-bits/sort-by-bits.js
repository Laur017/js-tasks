export const sortByBits = (arr) =>
  arr
    .reduce((acc, cur) => [...acc, [cur, [...cur.toString(2)].filter((i) => i === '1').length]], [])
    .sort((a, b) => (a[1] - b[1] === 0 ? a[0] - b[0] : a[1] - b[1]))
    .flat()
    .filter((_, indx) => indx % 2 === 0);

console.log(sortByBits([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]));
//[0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]
