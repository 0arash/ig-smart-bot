const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    host:"localhost",
    dialect:"mysql",
    database:"igbotdb",
    username:"arash",
    password:"!@MagicApe",
    logging:false
})

module.exports = sequelize