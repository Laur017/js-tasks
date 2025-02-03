export const runningAverage = () => {
  let arr = [];
  return (el) => {
    arr.push(el);
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  };
};
