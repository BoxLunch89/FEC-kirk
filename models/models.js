const Sequelize = require('sequelize');

const { NEARBY_DB_HOST, NEARBY_DB_USER, NEARBY_DB_PASS } = process.env;

const sequelize = new Sequelize('nearbyitems', NEARBY_DB_USER, NEARBY_DB_PASS, {
  logging: false,
  dialect: 'postgres',
  host: NEARBY_DB_HOST,
  port: '5432'
});

const Restaurant = sequelize.define('restaurant', {
  restaurant_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  num_reviews: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, // stringified array
  image_url: Sequelize.STRING
});

const Hotel = sequelize.define('hotel', {
  hotel_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  num_reviews: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, // stringified array
  image_url: Sequelize.STRING
});

const Attraction = sequelize.define('attraction', {
  attraction_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  num_reviews: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, // stringified array
  image_url: Sequelize.STRING
});

module.exports = {
  sequelize,
  Restaurant,
  Hotel,
  Attraction
};
