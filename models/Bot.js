const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Bot = sequelize.define("bot_tbl", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pk: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  is_running: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  cookie: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Bot;
