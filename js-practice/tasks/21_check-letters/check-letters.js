export const checkLetters = ([first, second]) => {
  const countLetters = (arr) => {
    return arr.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: acc[cur] ? acc[cur] + 1 : 1
      }),
      {}
    );
  };

  const obj1 = countLetters([...first.toLowerCase()]);
  const obj2 = countLetters([...second.toLowerCase()]);

  for (const prop in obj2) {
    if (!obj1[prop] || obj2[prop] > obj1[prop]) return false;
  }

  return true;
};
