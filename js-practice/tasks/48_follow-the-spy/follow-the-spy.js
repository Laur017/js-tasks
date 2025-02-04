export const followTheSpy = (arr) => {
  const findFirstLastCountry = () => {
    let s1 = [];
    let s2 = [];

    for (let i = 0; i < arr.length; i++) {
      s1.push(arr[i][0]);
      s2.push(arr[i][1]);
    }

    return [s1.find((city) => !s2.includes(city)), s2.find((city) => !s1.includes(city))];
  };

  let [first, last] = findFirstLastCountry();
  let route = [first];
  let currentCity = first;

  while (route.length < arr.length + 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === currentCity) {
        route.push(arr[i][1]);
        currentCity = arr[i][1];
        break;
      }
    }
  }

  return route.join(', ');
};
