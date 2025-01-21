export const insertString = (str1, str2 = '', pos = 0) => str1.slice(0, pos) + str2 + str1.slice(pos);
