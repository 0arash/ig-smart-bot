// initiate database connection with sequelize
const sequelize = require("../config/database");

const initializeDatabase = async () => {
  try {
    await sequelize.sync();
    console.log("Database synced.");
  } catch (error) {
    console.log("database sync error: ", error);
  }
};

module.exports = {initializeDatabase}