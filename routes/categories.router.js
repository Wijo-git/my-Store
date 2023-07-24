

const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/', (req, res) => {
  const categories = [];
  for (let index = 0; index < 10; index++) {
    categories.push({
      idCategory: faker.string.uuid(),
      name: faker.commerce.productAdjective()
    });
  }
  res.json(categories);
});

router.get('/:idCategory', (req, res) => {
  const { idCategory } = req.params;
  res.json({
    idCategory,
    name: 'Category 1'
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:idCategory', (req, res) => {
  const { idCategory } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    idCategory,
  });
});

router.delete('/:idCategory', (req, res) => {
  const { idCategory } = req.params;
  res.json({
    message: 'delete',
    idCategory
  });
});




// router.get('/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });



module.exports = router;
