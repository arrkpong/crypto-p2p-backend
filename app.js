require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/trades', require('./routes/trade.routes'));
app.use('/api/wallets', require('./routes/wallet.routes'));

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });
});
