const faker = require('faker');
const randomPuppy = require('random-puppy');
const randomCoordinates = require('./randomCoordinates');
const { Restaurant, Hotel, Attraction } = require('./models.js');

for (let i = 0; i < 200; i += 1) {
  randomPuppy()
    .then((url) => {
      let coords = randomCoordinates.getRandomCoordinates();

      let attraction = {
        attraction_id: i,
        name: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
        latitude: coords.latitude,
        longitude: coords.longitude,
        address: faker.address.streetAddress(true),
        rating: faker.random.number({ min: 0, max: 10 }),
        num_reviews: faker.random.number({ min: 0, max: 10 }),
        ranking: faker.random.number({ min: 0, max: 5 }),
        tags: faker.lorem.words(faker.random.number({ min: 0, max: 5 })), // stringified array
        image_url: url
      };

      Attraction.create(attraction);
    })
    .catch((err) => {
      console.error(err);
    });

  randomPuppy()
    .then((url) => {
      let coords = randomCoordinates.getRandomCoordinates();

      let hotel = {
        hotel_id: i,
        name: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
        latitude: coords.latitude,
        longitude: coords.longitude,
        address: faker.address.streetAddress(true),
        rating: faker.random.number({ min: 0, max: 10 }),
        num_reviews: faker.random.number({ min: 0, max: 10 }),
        ranking: faker.random.number({ min: 0, max: 5 }),
        tags: faker.lorem.words(faker.random.number({ min: 0, max: 5 })), // stringified array
        image_url: url
      };

      Hotel.create(hotel);
    })
    .catch((err) => {
      console.error(err);
    });

  randomPuppy()
    .then((url) => {
      let coords = randomCoordinates.getRandomCoordinates();

      let restaurant = {
        restaurant_id: i,
        name: faker.lorem.words(faker.random.number({ min: 1, max: 3 })),
        latitude: coords.latitude,
        longitude: coords.longitude,
        address: faker.address.streetAddress(true),
        rating: faker.random.number({ min: 0, max: 10 }),
        num_reviews: faker.random.number({ min: 0, max: 10 }),
        ranking: faker.random.number({ min: 0, max: 5 }),
        tags: faker.lorem.words(faker.random.number({ min: 0, max: 5 })), // stringified array
        image_url: url
      };

      Restaurant.create(restaurant);
    })
    .catch((err) => {
      console.error(err);
    });
}
