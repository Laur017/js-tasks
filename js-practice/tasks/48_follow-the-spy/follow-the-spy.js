export const followTheSpy = (arr) => {
  const findFirstLastCountry = () => {
    let first = '';
    let last = '';
    let s1 = [];
    let s2 = [];
    for (let i = 0; i < arr.length; i++) {
      s1.push(arr[i][0]);
      s2.push(arr[i][1]);
    }
    for (let i in s1) {
      if (!s2.includes(s1[i])) {
        first = s1[i];
      }
      if (!s1.includes(s2[i])) {
        last = s2[i];
      }
    }
    return [first, last];
  };
  let [first, last] = findFirstLastCountry();
  let answ = [arr[0]];
  let q = 0;

  console.log(first, last);
  console.log(answ[0]);
  for (let i = 0; i < arr.length; i++) {
    if (answ[q][1] === arr[i][0]) {
      answ.push(arr[i]);
      q++;
      i = 0;
    }
    if (answ[q][1] === last) {
      q++;
      //todo
    }
  }

  answ = answ
    .flat()
    .filter((_, i) => i % 2 === 1)
    .slice(0, answ.length - 1)
    .join(', ');
  return `${first}, ${answ}, ${last}`;
};
