const COORDS = {
  min_latitude: 37712852, // 37.712852
  min_longitude: -122507387, // -122.507387
  max_latitude: 37807562, // 37.807562
  max_longitude: -122390252 // -122.390252
};

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomCoordinates = () => {
  const latitude =
    randomNumber(COORDS.min_latitude, COORDS.max_latitude) / 1000000;
  const longitude =
    randomNumber(COORDS.min_longitude, COORDS.max_longitude) / 1000000;

  return { latitude, longitude };
};

module.exports = { getRandomCoordinates };
