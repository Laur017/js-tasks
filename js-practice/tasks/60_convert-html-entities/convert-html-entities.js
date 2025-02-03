export const convertHTMLEntities = (str) => {
  const ent = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;'
  };
  let arr = [...str];
  for (let i = 0; i < arr.length; i++) {
    if (ent.hasOwnProperty(arr[i])) {
      arr[i] = ent[arr[i]];
    }
  }
  return arr.join('');
};
