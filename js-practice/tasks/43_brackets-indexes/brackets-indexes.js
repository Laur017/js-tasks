export const bracketsIndexes = (str, idx) => {
  let oppenedBrackets = 1;
  if (str[idx] !== '(') return -1;
  for (let i = idx + 1; i < str.length; i++) {
    if (str[i] === '(') oppenedBrackets++;
    if (str[i] === ')') {
      oppenedBrackets--;
      if (oppenedBrackets === 0) return i;
    }
  }

  return -1;
};

console.log(bracketsIndexes('((1)23(45))(aB)', 0));
