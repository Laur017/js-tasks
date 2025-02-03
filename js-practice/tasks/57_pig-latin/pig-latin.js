export const pigLatin = (str) => {
  let answer = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(str[0])) {
    answer += `${str}way`;
  } else {
    let i = [...str].findIndex((el) => vowels.includes(el));
    answer += `${str.slice(i) + str.slice(0, i)}ay`;
  }
  return answer;
};
