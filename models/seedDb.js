const Sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://localhost:5432/testdb');
const faker = require('faker');
const randomPuppy = require('random-puppy');


randomPuppy()
  .then(url => {
      let attraction = {
        attraction_id: 0,
        name: faker.lorem.words(faker.random.number({min:1, max:3})),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        address: faker.address.streetAddress(true),
        rating: faker.random.number({min:0, max:5}),
        ranking: faker.random.number({min:0, max:5}),
        tags: faker.lorem.words(faker.random.number({min:0, max:5})), //stringified array
        image_url: url
      };
      console.log(attraction);
  })
  .catch(err => {
    console.error(err);
  });



randomPuppy()
  .then(url => {
      let hotel = {
        hotel_id: 0,
        name: faker.lorem.words(faker.random.number({min:1, max:3})),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        address: faker.address.streetAddress(true),
        rating: faker.random.number({min:0, max:5}),
        ranking: faker.random.number({min:0, max:5}),
        tags: faker.lorem.words(faker.random.number({min:0, max:5})), //stringified array
        image_url: url
      };
      console.log(hotel);
  })
  .catch(err => {
    console.error(err);
  });


randomPuppy()
  .then(url => {
      let restaurant = {
        restaurant_id: 0,
        name: faker.lorem.words(faker.random.number({min:1, max:3})),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        address: faker.address.streetAddress(true),
        rating: faker.random.number({min:0, max:5}),
        no_reviews: faker.random.number({min:0, max:10}),
        ranking: faker.random.number({min:0, max:5}),
        tags: faker.lorem.words(faker.random.number({min:0, max:5})), //stringified array
        image_url: url
      };
      console.log(restaurant);
  })
  .catch(err => {
    console.error(err);
  });