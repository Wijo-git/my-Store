const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  for (let index = 0; index < 50; index++) {
    users.push({
      idUser: faker.string.uuid(),

    });
  }
  res.json(users);
});

// router.get('/', (req, res) => {
//   const { limit, offset } = req.query;
//   if (limit, offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send('No se enviaron parámetros')
//   }

// });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'usuario 1',
  });
});

module.exports = router;
