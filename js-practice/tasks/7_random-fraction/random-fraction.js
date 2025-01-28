export const randomFraction = () => {
  const number = Math.random();
  return number !== 0 ? number : randomFraction();
};
