// Import Sequelize constructor from the sequelize package
const { Sequelize } = require('sequelize');

// Import database configuration for the 'development' environment
const config = require('../config/config.js')['development'];

// Create a new Sequelize instance with the database config
// This establishes a connection to the database
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

// Save Sequelize class and the sequelize instance for use elsewhere
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import model definitions and initialize them with sequelize instance and Sequelize class
db.User = require('./user.model')(sequelize, Sequelize);
db.Wallet = require('./wallet.model')(sequelize, Sequelize);
db.Order = require('./order.model')(sequelize, Sequelize);
db.Transaction = require('./transaction.model')(sequelize, Sequelize);

// Define relationships between models

// A User can have many Wallets (one-to-many)
db.User.hasMany(db.Wallet);
// Each Wallet belongs to one User (many-to-one)
db.Wallet.belongsTo(db.User);

// A User can have many Orders
db.User.hasMany(db.Order);
// Each Order belongs to one User
db.Order.belongsTo(db.User);

// A User can have many Transactions as the Sender
db.User.hasMany(db.Transaction, { as: 'Sender', foreignKey: 'senderId' });
// A User can have many Transactions as the Receiver
db.User.hasMany(db.Transaction, { as: 'Receiver', foreignKey: 'receiverId' });

module.exports = db;
