const isBoolean = (param) => typeof param === 'boolean';

console.log(isBoolean(true));
console.log(isBoolean(false));
console.log(isBoolean([1, 2, 3]));
console.log(isBoolean([].slice));
