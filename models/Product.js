const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("product_tbl", {
  title: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  description: DataTypes.STRING,
  price: DataTypes.STRING,
  color: DataTypes.STRING,
  size: DataTypes.STRING,
});

module.exports = Product;
