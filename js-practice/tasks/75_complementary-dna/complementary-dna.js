export const complementaryDNA = (str) => {
  let pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };
  return [...str].map((el) => pairs[el]).join('');
};
