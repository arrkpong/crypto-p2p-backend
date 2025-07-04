const db = require('../models');

// Get all wallets belonging to a specific user
exports.getWalletsByUser = async (req, res) => {
  try {
    // Find all Wallet records where userId matches the userId parameter from the URL
    const wallets = await db.Wallet.findAll({
      where: { userId: req.params.userId },
    });

    // Return the list of wallets as JSON response
    res.json(wallets);

  } catch (error) {
    // If an error occurs, respond with status 500 and error message
    res.status(500).json({ message: 'Error fetching wallets', error });
  }
};
