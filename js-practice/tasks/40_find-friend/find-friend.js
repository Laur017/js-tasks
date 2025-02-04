export const findFriend = (arr) => {
  let count = 0;
  let idx = [];

  for (let i = 0; i < arr.length - 2; i++) {
    const trio = arr.slice(i, i + 3);

    if (
      trio.filter((mask) => mask === 'blue').length === 2 &&
      trio.filter((mask) => mask === 'red').length === 1 &&
      idx.indexOf(i + trio.indexOf('red')) === -1
    ) {
      idx.push(i + trio.indexOf('red'));
      count++;
    }
  }

  return count;
};
