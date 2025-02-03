export const vowelCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return [...str].reduce((acc, cur) => (vowels.includes(cur) ? acc + 1 : acc), 0);
};
