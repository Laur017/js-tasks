export function humanizeFormat() {
  const ending = ['th', 'st', 'nd', 'rd'];
  const number = arguments[0];

  if (!arguments.length) return '';
  const end = number % 10;
  if ((number > 3 && number < 21) || end > 3) {
    return number + ending[0];
  }
  return number + ending[end];
}
