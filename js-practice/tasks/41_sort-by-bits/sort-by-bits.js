export const sortByBits = (arr) =>
  arr.splice(
    0,
    arr.length,
    ...arr
      .reduce((acc, cur) => [...acc, [cur, [...cur.toString(2)].filter((i) => i === '1').length]], [])
      .sort((a, b) => (a[1] - b[1] === 0 ? a[0] - b[0] : a[1] - b[1]))
      .flat()
      .filter((_, indx) => indx % 2 === 0)
  );
