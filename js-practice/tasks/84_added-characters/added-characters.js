export const addedCharacters = (str1, str2) => {
  const countOccurence = (str) =>
    [...str].reduce((acc, cur) => {
      acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
      return acc;
    }, {});

  const obj1 = countOccurence(str1);
  const obj2 = countOccurence(str2);

  for (let i in obj2) {
    if (!obj1.hasOwnProperty(i)) {
      return i;
    } else if (obj1[i] !== obj2[i]) {
      return i;
    }
  }
};
