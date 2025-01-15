export const truncateString = (str, len) => {
  if (str.length <= len) return str;
  let slicedStr = str.slice(0, len);
  return slicedStr.length <= 3 ? slicedStr + `...` : slicedStr.slice(0, -3) + '...';
};
