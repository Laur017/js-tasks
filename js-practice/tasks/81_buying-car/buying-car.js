export const buyingCar = (car1, car2, save, decrease) => {
  let month = 0;
  let saved = 0;
  while (saved + car1 < car2) {
    car1 -= (car1 * decrease) / 100;
    car2 -= (car2 * decrease) / 100;
    month++;
    saved += save;
    if (month % 2 === 1) {
      decrease += 0.5;
    }
  }
  return [month, Math.floor(saved + car1 - car2)];
};
