export const arrayChunks = (arr, len) => {
  let twoDimArr = [];

  for (let i = 0; i < arr.length; i += len) {
    twoDimArr.push(arr.slice(i, i + len));
  }

  return twoDimArr;
};
