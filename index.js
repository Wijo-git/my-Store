const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// app.get('/users', (req, res)=>{
//   res.json({
//     name: 'usuario 1',
//   });
// })

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'usuario 1',
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit, offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No se enviaron parámetros')
  }

});


app.get('/products', (req, res) => {
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producto 1',
    price: '2000',
  });
});


app.get('/categories', (req, res) => {
  res.json({
    name: 'categorie 1',
    precio: '2000',
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('My port ' + port);
});
