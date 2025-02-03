export const binaryEncode = (str = '') => [...str].map((i) => i.charCodeAt().toString(2).padStart(8, '0')).join(' ');
