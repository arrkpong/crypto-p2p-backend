const db = require('../models');
const { faker } = require('@faker-js/faker');

(async () => {
  await db.sequelize.sync({ force: true });

  const users = await db.User.bulkCreate([
    {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: '123456'
    },
    {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: '123456'
    }
  ]);

  await db.Wallet.bulkCreate([
    { userId: users[0].id, currency: 'BTC', balance: 1.5 },
    { userId: users[1].id, currency: 'THB', balance: 100000 }
  ]);

  await db.Order.create({
    userId: users[1].id,
    type: 'SELL',
    currency: 'BTC',
    amount: 1,
    price: 1200000
  });

  console.log('✅ Seeded successfully.');
})();
