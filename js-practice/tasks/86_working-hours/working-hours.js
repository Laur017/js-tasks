export const workingHours = (arr) => {
  if (!arr) return [];

  let answ = [];
  let j;
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const updatedArr = arr.sort((a, b) => weekDays.indexOf(a.day) - weekDays.indexOf(b.day));

  for (let i = 0; i < updatedArr.length; i++) {
    let first = i;
    let last = i;
    for (j = i + 1; j < updatedArr.length; j++) {
      if (
        updatedArr[j].from === updatedArr[i].from &&
        updatedArr[j].to === updatedArr[i].to &&
        weekDays.indexOf(updatedArr[j].day) - weekDays.indexOf(updatedArr[i].day) === 1
      ) {
        last = j;
        i = j;
      } else {
        break;
      }
    }
    answ.push(
      `${updatedArr[first].day.toUpperCase()}${first === last ? '' : ' - ' + updatedArr[last].day.toUpperCase()}: ${updatedArr[first].from} - ${updatedArr[first].to}`
    );
  }

  return answ;
};
