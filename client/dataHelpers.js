import axios from 'axios';

const getItem = (type, id) => (
  new Promise((resolve) => {
    axios.get(`/nearby/${type}/${id}`)
      .then((item) => {
        resolve(item.data);
      })
      .catch((err) => {
        console.log('Error getting item', type, id);
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      });
  })
);

const getFourIds = id => (
  [(id + 1) % 200, (id + 2) % 200, (id + 3) % 200, (id + 4) % 200]
);

const getNearest = (type, id) => {
  let nearest = [];
  let nearestIds = getFourIds(id);

  nearestIds.forEach((nearestId) => {
    nearest.push(getItem(type, nearestId));
  });

  return Promise.all(nearest);
};

const getData = async (id) => {
  let attraction = getItem('attractions', id);
  let hotels = getNearest('hotels', id);
  let restaurants = getNearest('restaurants', id);
  let attractions = getNearest('attractions', id);

  return Promise.all([attraction, hotels, restaurants, attractions]);
};


module.exports = { getItem, getNearest, getData };
