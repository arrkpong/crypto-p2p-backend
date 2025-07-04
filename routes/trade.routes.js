const router = require('express').Router(); // Create a new Express router instance
const tradeController = require('../controllers/trade.controller'); // Import the trade controller

// [GET] Route to get all orders
router.get('/', tradeController.getAllOrders);

// [POST] Route to create a new buy or sell order
router.post('/', tradeController.createOrder);

module.exports = router; // Export the router to be used in the main app
