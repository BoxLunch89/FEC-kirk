const { Restaurant, Hotel, Attraction } = require('../models/models.js');

const getOneRestaurant = (req, res) => {
  Restaurant.findOne({ where: { restaurant_id: req.params.id } })
    .then((restaurant) => restaurant.dataValues)
    .then((restaurant) => {
      res.send(restaurant);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
};

const getOneHotel = (req, res) => {
  Hotel.findOne({ where: { hotel_id: req.params.id } })
    .then((hotel) => hotel.dataValues)
    .then((hotel) => {
      res.send(hotel);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
};

const getOneAttraction = (req, res) => {
  Attraction.findOne({ where: { attraction_id: req.params.id } })
    .then((attraction) => attraction.dataValues)
    .then((attraction) => {
      res.send(attraction);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
};

module.exports = { getOneRestaurant, getOneHotel, getOneAttraction };
