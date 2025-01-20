export const uniteUnique = function () {
  return [...new Set([...arguments].flat())];
};
