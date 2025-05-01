export const reverseStringInRange = (str, [start, end]) =>
  str.slice(0, start) + [...str.slice(start, end + 1)].reverse().join('') + str.slice(end + 1, str.length);
