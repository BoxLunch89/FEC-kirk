const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/testdb');

const Restaraunt = sequelize.define('restaurant', {
  restaurants_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  no_reviews: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, //stringified array
  image_url: Sequelize.STRING
});

const Hotel = sequelize.define('hotel', {
  hotel_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, //stringified array
  image_url: Sequelize.STRING
});

const Attraction = sequelize.define('attraction', {
  attraction_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, //stringified array
  image_url: Sequelize.STRING
});


exports.Restaurant = Restaraunt;
exports.Hotel = Hotel;
exports.Attraction = Attraction;