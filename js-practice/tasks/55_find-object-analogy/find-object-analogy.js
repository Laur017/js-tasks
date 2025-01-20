export const findObjectAnalogy = (arr, obj) => {
  let answ = [];
  arr.forEach((ob) => {
    let allKeysMatch = true;
    for (let key in obj) {
      if (ob[key] !== obj[key]) {
        allKeysMatch = false;
        break;
      }
    }
    if (allKeysMatch) {
      answ.push(ob);
    }
  });
  return answ;
};
