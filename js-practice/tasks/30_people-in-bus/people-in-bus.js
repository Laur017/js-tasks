export const peopleInBus = (arr) => arr.map((tuple) => tuple[0] - tuple[1]).reduce((acc, cur) => acc + cur, 0);
