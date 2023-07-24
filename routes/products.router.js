
const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      idProduct: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    });
  }
  res.json(products);
});


router.get('/:idProduct', (req, res) => {
  const { idProduct } = req.params;
  res.json({
    idProduct,
    name: 'producto 1',
    price: '2000',
  });
});


router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
})


// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   res.json({
//     message: 'update',
//     data: body,
//     id,
//   });
// })

router.patch('/:idProduct', (req, res) => {
  const { idProduct } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    idProduct,
  });
})

router.delete('/:idProduct', (req, res) => {
  const { idProduct } = req.params;
  res.json({
    message: 'delete',
    idProduct
  });
})


module.exports = router;
