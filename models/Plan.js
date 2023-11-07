const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Plan = sequelize.define("plan", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    days: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Plan