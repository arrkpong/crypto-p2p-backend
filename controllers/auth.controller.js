// Import the database models (e.g., User model)
const db = require('../models');

// Import the JSON Web Token library for generating and verifying tokens
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
  // Create a new user using the request body (e.g., { username, password, ... })
  const user = await db.User.create(req.body);

  // Return the created user as JSON
  res.json(user);
};

// Login an existing user
exports.login = async (req, res) => {
  // Extract username and password from the request body
  const { username, password } = req.body;

  // Find the user in the database by username
  const user = await db.User.findOne({ where: { username } });

  // If the user is not found or the password is incorrect, return 401 Unauthorized
  if (!user || !(await user.checkPassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // If credentials are valid, generate a JWT token with the user's ID
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  // Return the token to the client
  res.json({ token });
};
