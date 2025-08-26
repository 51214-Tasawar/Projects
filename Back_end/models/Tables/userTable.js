const {DataTypes , Model} = require("sequelize");
const sequelize = require("../../Databasecon")
const { hash } = require("bcrypt");
const {v4 : uuid} = require("uuid");
class USERS extends Model{ }

USERS.init({
    userId : {
        primaryKey : true ,
        type : DataTypes.STRING(500)
    } ,
    name : {
        allowNull : false , 
        type : DataTypes.STRING(100)
    },
    username : {
        allowNull : false ,
        unique : true ,
        type : DataTypes.STRING(100)
    },
    password:{
        allowNull:false,
        type : DataTypes.STRING(1000)
    } ,
    email:{
     allowNull: false ,
     unique : true ,
     type: DataTypes.STRING(255)
    }
},{
    name : "USERS" ,
    timestamps:true ,
    paranoid : true ,
    sequelize : sequelize

})
USERS.beforeCreate(async(user)=>{
user.userId = uuid()
user.password =  await hash(user.password , 10)
})
USERS.afterCreate((user)=>{
    delete user.dataValues.password
})

module.exports = USERS