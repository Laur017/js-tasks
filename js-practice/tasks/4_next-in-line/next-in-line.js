const nextInLine = (array, number) => {
  array.push(number);
  return array.shift();
};

console.log(nextInLine([], 1));
console.log(nextInLine([3, 2], 1));
