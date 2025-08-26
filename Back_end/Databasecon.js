require("dotenv").config()
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize({
    host : process.env.DB_HOST,
    database:process.env.DB_NAME,
    username : process.env.DB_USERNAME,
    port : process.env.DB_PORT,
    dialect : process.env.DB_DIALECT,
    password : process.env.DB_PASSWORD
})

module.exports = sequelize