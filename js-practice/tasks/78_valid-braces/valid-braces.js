export const validBraces = (str) => {
  const obj = [...str].reduce((acc, cur) => {
    acc.hasOwnProperty(cur) ? (acc[cur] = acc[cur] + 1) : (acc[cur] = 1);
    return acc;
  }, {});
  return obj.hasOwnProperty('(')
    ? obj['('] === obj[')']
    : obj.hasOwnProperty('[')
      ? obj['['] === obj[']']
      : obj.hasOwnProperty('{')
        ? obj['{'] === obj['}']
        : true;
};
