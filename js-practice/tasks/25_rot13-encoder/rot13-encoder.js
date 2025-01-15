export const rot13Encoder = (str) => {
  let rot13_Dictionary = {};
  for (let i = 65; i < 91; i++) {
    const finalCode = i + 13;
    rot13_Dictionary[String.fromCharCode(i)] = String.fromCharCode(finalCode > 90 ? finalCode - 26 : finalCode);
    rot13_Dictionary[String.fromCharCode(i).toLowerCase()] = String.fromCharCode(
      finalCode > 90 ? finalCode - 26 : finalCode
    ).toLowerCase();
  }

  return [...str].map((i) => rot13_Dictionary[i] ?? i).join('');
};
