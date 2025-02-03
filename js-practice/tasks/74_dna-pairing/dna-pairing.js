export const DNAPairing = (str) => {
  let pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  return [...str].map((el) => [el, pairs[el]]);
};
