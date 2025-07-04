module.exports = (sequelize, DataTypes) => {
  // Define the 'Wallet' model representing a user's wallet for different currencies
  return sequelize.define('Wallet', {
    // The type of currency stored in the wallet (e.g., BTC, ETH, USD, THB)
    currency: DataTypes.STRING,

    // The current balance amount in the wallet
    balance: DataTypes.FLOAT
  });
};
