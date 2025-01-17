export const findFriend = (arr) => {
  let count = 0;
  let indexChecked = [];

  const isTrioPerfect = (trio, idx) => {
    if (
      trio.filter((friend) => friend === 'blue').length === 2 &&
      trio.filter((friend) => friend === 'red').length === 1 &&
      !indexChecked.includes(idx)
    ) {
      indexChecked.push(idx);
      count++;
    }
  };

  for (let i = 0; i < arr.length - 2; i++) {
    isTrioPerfect(arr.slice(i, i + 3), arr.slice(i, i + 3).indexOf('red'));
  }

  return [count, indexChecked];
};

// console.log(findFriend(['blue', 'blue', 'red', 'red', 'blue', 'green']))
console.log(findFriend(['blue', 'red', 'blue', 'blue', 'red', 'blue', 'red']));
