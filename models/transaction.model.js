module.exports = (sequelize, DataTypes) => {
  // Define the 'Transaction' model representing a transfer of currency
  return sequelize.define('Transaction', {
    // The currency being transferred (e.g., BTC, ETH)
    currency: DataTypes.STRING,

    // The amount of currency transferred
    amount: DataTypes.FLOAT,

    // The ID of the user who is sending the currency (foreign key)
    senderId: DataTypes.INTEGER,

    // The ID of the user who is receiving the currency (foreign key)
    receiverId: DataTypes.INTEGER,

    // Indicates if the transaction is external (true means transfer outside the system)
    external: DataTypes.BOOLEAN
  });
};
