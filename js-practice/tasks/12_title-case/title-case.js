export const titleCase = (str) => {
  let arrOfWords = str.toLowerCase().split(' ');
  for (let i = 0; i < arrOfWords.length; i++) {
    arrOfWords[i] = arrOfWords[i] ? arrOfWords[i][0].toUpperCase() + arrOfWords[i].slice(1) : '';
  }
  return arrOfWords.join(' ');
};
