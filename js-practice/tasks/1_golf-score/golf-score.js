export const golfScore = (par, strokes) => {
  let message = '';

  switch (true) {
    case strokes === 1:
      message = 'Hole-in-one!';
      break;
    case strokes <= par - 2:
      message = 'Eagle';
      break;
    case strokes === par - 1:
      message = 'Birdie';
      break;
    case strokes === par:
      message = 'Par';
      break;
    case strokes === par + 1:
      message = 'Bogey';
      break;
    case strokes === par + 2:
      message = 'Double Bogey';
      break;
    case strokes >= par + 3:
      message = 'Go Home!';
      break;
  }
  return message;
};

// export { golfScore };
