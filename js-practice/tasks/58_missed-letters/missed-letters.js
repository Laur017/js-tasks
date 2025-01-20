export const missedLetters = (str) => {
  const arrOfLetters = [...str];

  for (let i = 0; i < arrOfLetters.length - 1; i++) {
    if (!(arrOfLetters[i].charCodeAt() - arrOfLetters[i + 1].charCodeAt() === -1)) {
      return String.fromCharCode(arrOfLetters[i].charCodeAt() + 1);
    }
  }
  return undefined;
};
