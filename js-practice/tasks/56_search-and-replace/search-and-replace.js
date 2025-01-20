export const searchAndReplace = (str, before, after) => {
  if (before[0].charCodeAt() < 91) after = after[0].toUpperCase() + after.slice(1);
  return str
    .split(' ')
    .map((el) => (el === before ? after : el))
    .join(' ');
};
