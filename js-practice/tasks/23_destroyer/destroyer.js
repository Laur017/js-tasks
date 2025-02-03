export function destroyer() {
  const arr = arguments[0];
  const rest = [...arguments].slice(1);

  return arr.filter((number) => !rest.includes(number));
}
