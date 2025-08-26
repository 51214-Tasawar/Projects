const { DataTypes , Model} = require("sequelize")
const sequelize = require("../../Databasecon")
const {v4 : uuid} = require("uuid")

class Products extends Model {}

Products.init({
    productId :{
        primaryKey : true ,
        type : DataTypes.STRING (500)
    },
    productname:{
        allowNull : false ,
        type : DataTypes.STRING(100)
    },
    destcryption:{
         allowNull : false ,
         type : DataTypes.STRING(500)
    },
    price:{
        allowNull : false ,
        type : DataTypes.STRING(100)
    },
    category:{
        allowNull: false ,
        type : DataTypes.STRING(100)
    } ,
    stock:{
        allowNull : false ,
        type : DataTypes.STRING(100)
    },
    brandId : {
        allowNull : false ,
        type : DataTypes.STRING(100)
    }
} ,
{
    name : "PRODUCTS" ,
    timestamps : true ,
    paranoid : true ,
    sequelize : sequelize
})

Products.beforeCreate((product)=>{
   product.productId = uuid()
})

module.exports = Products