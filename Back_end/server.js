// const route = require("./Router/UserRouter")
const express = require("express")
const new_jwt = require("jsonwebtoken")
// const bodyParser = require("body-parser")
//  const {db} = require("./models/Index")
const my_Secret_Key = "lmx,je29lmn989122wx"

const app = express()
const prot = 3001 ;

const new_token = new_jwt.sign({username: "username" , password : "121nmxmni112"} , my_Secret_Key , {expiresIn : '1m'})
console.log(`Generated Token Is  :  ${new_token}`)

// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())

// app.use("/user" , route)
// db.connection.sync({logging:false, alter:true}).then(()=>{
//     console.log("Connection created Successfully")
// }).catch((error)=>{
//    console.log(`Gtting Error while connection ${error}`)
// })

app.listen(prot , ()=>{
    console.log(`Running on the Port ${prot}`)
})