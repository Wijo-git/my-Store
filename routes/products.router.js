
const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: '2000',
  });
});

// router.get('/', (req, res) => {
//   const products = [];
//   const { size } = req.query;
//   const limit = size || 10;
//   for (let index = 0; index < limit; index++) {
//     products.push({
//       name: faker.commerce.productName(),
//       price: parseInt(faker.commerce.price(), 10),
//       image: faker.image.imageUrl()
//     });
//   }
//   res.json(products);
// });

module.exports = router;
