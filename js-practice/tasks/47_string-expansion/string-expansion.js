export const stringExpansion = (str) => {
  let finalString = '';
  let curNumber = 1;

  const isNumber = (n) => n.charCodeAt() >= 48 && n.charCodeAt() <= 57;

  const repeatLetter = (n, lett) => {
    let letterSequence = '';
    for (let i = 0; i < n; i++) letterSequence += lett;
    return letterSequence;
  };

  for (let i = 0; i < str.length; i++) {
    if (isNumber(str[i])) {
      curNumber = Number(str[i]);
    } else {
      finalString += repeatLetter(curNumber, str[i]);
    }
  }

  return finalString;
};
