const express = require('express');
const cors = require('cors');
const { getOneRestaurant, getOneHotel, getOneAttraction } = require('./dbFunctions');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());

app.use('/:id', express.static('public'));
app.use('/nearby/bundle.js', express.static('public/build/bundle.js'));

app.get('/nearby/restaurants/:id', getOneRestaurant);
app.get('/nearby/hotels/:id', getOneHotel);
app.get('/nearby/attractions/:id', getOneAttraction);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
