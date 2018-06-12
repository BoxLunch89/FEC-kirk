import axios from 'axios';

const getItem = (type, id) =>
  new Promise((resolve) => {
    axios
      .get(`/nearby/${type}/${id}`)
      .then((item) => {
        resolve(item.data);
      })
      .catch((error) => {
        console.log('Error getting item', type, id);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  });

const getFourIds = (id) => [
  (id + 1) % 200,
  (id + 2) % 200,
  (id + 3) % 200,
  (id + 4) % 200
];

const getNearest = (type, id) => {
  const nearest = [];
  const nearestIds = getFourIds(id);

  nearestIds.forEach((nearestId) => {
    nearest.push(getItem(type, nearestId));
  });

  return Promise.all(nearest);
};

const getData = async (id) => {
  const attraction = getItem('attractions', id);
  const hotels = getNearest('hotels', id);
  const restaurants = getNearest('restaurants', id);
  const attractions = getNearest('attractions', id);

  return Promise.all([attraction, hotels, restaurants, attractions]);
};

module.exports = { getItem, getNearest, getData };
