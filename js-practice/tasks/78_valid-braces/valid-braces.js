export const validBraces = (str) => {
  const stack = [];
  const pair = { '(': ')', '{': '}', '[': ']' };

  for (let char of str) {
    if (pair[char]) {
      stack.push(char);
    } else {
      if (stack.pop() !== Object.keys(pair).find((key) => pair[key] === char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
