const router = require('express').Router(); // Create a new Express router instance
const authController = require('../controllers/auth.controller'); // Import the authentication controller

// Route to handle user registration requests
router.post('/register', authController.register);

// Route to handle user login requests
router.post('/login', authController.login);

module.exports = router; // Export the router to be used in the main app
