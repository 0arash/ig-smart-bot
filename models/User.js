const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("user_tbl", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ig_username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
