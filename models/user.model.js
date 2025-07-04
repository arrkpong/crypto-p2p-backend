const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  // Define the 'User' model representing users in the database
  const User = sequelize.define('User', {
    // Username field must be unique
    username: { type: DataTypes.STRING, unique: true },

    // Email field must be unique
    email: { type: DataTypes.STRING, unique: true },

    // Password field (will store hashed password)
    password: DataTypes.STRING
  }, {
    // Model hooks allow us to run code before or after certain events
    hooks: {
      // Before creating a new user, hash the plain text password asynchronously
      beforeCreate: async (user) => {
        user.password = await bcrypt.hash(user.password, 10); // saltRounds = 10
      }
    }
  });

  // Instance method to compare a plain password with the hashed password stored
  User.prototype.checkPassword = function(password) {
    // Returns a promise that resolves to true if password matches, false otherwise
    return bcrypt.compare(password, this.password);
  };

  return User;
};
