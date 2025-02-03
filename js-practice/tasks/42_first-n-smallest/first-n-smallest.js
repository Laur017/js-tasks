export const firstNSmallest = (arr, num) => {
  let minimumArray = [];
  let copyArr = [...arr];
  let finalArr = [];
  let indx;
  for (let i = 0; i < num; i++) {
    minimumArray.push(Math.min(...copyArr));
    indx = copyArr.indexOf(Math.min(...copyArr));
    copyArr.splice(indx, 1);
  }

  for (let el of arr) {
    if (finalArr.length === num) return finalArr;
    if (minimumArray.includes(el)) {
      finalArr.push(el);
    }
  }
  return finalArr;
};
