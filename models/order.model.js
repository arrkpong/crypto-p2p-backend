module.exports = (sequelize, DataTypes) => {
  // Define the 'Order' model representing an order in the database
  return sequelize.define('Order', {
    // The type of order, e.g., 'BUY' or 'SELL'
    type: DataTypes.STRING,

    // The currency involved in the order (e.g., BTC, USD)
    currency: DataTypes.STRING,

    // The amount of currency to buy or sell
    amount: DataTypes.FLOAT,

    // The price per unit of the currency
    price: DataTypes.FLOAT,

    // The status of the order with a default value 'OPEN'
    // Possible values: 'OPEN', 'FILLED', 'CANCELLED'
    status: { type: DataTypes.STRING, defaultValue: 'OPEN' }
  });
};
