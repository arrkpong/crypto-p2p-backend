const router = require('express').Router(); // Create a new Express router instance
const walletController = require('../controllers/wallet.controller'); // Import the wallet controller

// GET route to fetch all wallets belonging to a specific user by userId
// The userId is passed as a URL parameter
router.get('/:userId', walletController.getWalletsByUser);

module.exports = router; // Export the router to be used in the main app
