const db = require('../models');

// Get all orders with associated user details
exports.getAllOrders = async (req, res) => {
  // Find all orders and include related User data using Sequelize's eager loading
  const orders = await db.Order.findAll({ include: db.User });

  // Send the orders as JSON response
  res.json(orders);
};

// Create a new order
exports.createOrder = async (req, res) => {
  // Create an order record in the database with data from the request body
  const order = await db.Order.create({
    userId: req.body.userId,     // ID of the user placing the order
    type: req.body.type,         // Type of order (e.g., buy or sell)
    currency: req.body.currency, // Cryptocurrency or fiat currency for the order
    amount: req.body.amount,     // Amount of currency to buy or sell
    price: req.body.price,       // Price per unit of currency
  });

  // Return the newly created order with HTTP status 201 (Created)
  res.status(201).json(order);
};
