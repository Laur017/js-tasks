export const checkForPalindromes = (str) => {
  const isPalindrome = (s) => s === [...s].reverse().join('');
  return isPalindrome(
    [...str.toLowerCase()]
      .filter((i) => (i.charCodeAt() > 47 && i.charCodeAt() < 58) || (i.charCodeAt() > 96 && i.charCodeAt() < 123))
      .join('')
  );
};
