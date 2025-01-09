export const findNumbers = (str) => {
  return str.match(/\d+/g).map((element) => parseInt(element));
};
