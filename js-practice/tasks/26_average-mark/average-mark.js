export const averageMark = (arr) => Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
