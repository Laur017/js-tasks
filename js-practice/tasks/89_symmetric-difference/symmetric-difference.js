export function symmetricDifference() {
  let set1 = new Set(arguments[0]);

  for (let i = 1; i < arguments.length; i++) {
    set1 = set1.symmetricDifference(new Set(arguments[i]));
  }

  return [...set1].sort((a, b) => a - b);
}
