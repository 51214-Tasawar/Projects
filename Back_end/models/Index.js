const sequelize = require("../Databasecon")
const USERS = require("./Tables/userTable")
 
const models = {USERS}
const db ={ }
db.connection = sequelize 
sequelize.models =models


module.exports = {db , models}