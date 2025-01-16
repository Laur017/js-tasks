export const uniqueInOrder = (str) => {
  const arr = [...str];
  let answ = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      answ.push(arr[i]);
    }
  }
  if (answ.at(-1) !== arr.at(-1)) answ.push(arr.at(-1));
  return answ;
};
