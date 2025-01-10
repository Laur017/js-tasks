export const arrayChunks = (arr, len) => {
  let i = 0;
  let twoDimArr = [];
  while (i < arr.length) {
    twoDimArr.push(arr.slice(i, i + len));
    i += len;
  }

  return twoDimArr;
};
