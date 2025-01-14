export const rot13Encoder = (str) =>
  [...str]
    .map((element) => {
      const code = element.charCodeAt();
      if (code > 64 && code < 91) {
        const finalCode = code + 13;
        return String.fromCharCode(finalCode > 90 ? finalCode - 26 : finalCode);
      }
      return element;
    })
    .join('');
