// Load environment variables from a .env file into process.env
require('dotenv').config();

module.exports = {
  development: {
    // The username for connecting to the PostgreSQL database
    username: process.env.DB_USER,

    // The password for the database user
    password: process.env.DB_PASS,

    // The name of the database to connect to
    database: process.env.DB_NAME,

    // The host where the database is running (e.g., localhost or remote server)
    host: process.env.DB_HOST,

    // The type of database dialect to use (PostgreSQL in this case)
    dialect: 'postgres'
  }
};
