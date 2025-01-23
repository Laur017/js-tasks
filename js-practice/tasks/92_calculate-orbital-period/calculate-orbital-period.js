const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;
export const calculateOrbitalPeriod = (arr) =>
  arr.map((el) => ({
    name: el.name,
    orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(EARTH_RADIUS + el.avgAlt, 3) / GM))
  }));
