export const fatFingers = (str) => {
  let capsed = false;
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'a') {
      capsed = !capsed;
    } else {
      answer += capsed ? (str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase()) : str[i];
    }
  }

  return answer;
};
