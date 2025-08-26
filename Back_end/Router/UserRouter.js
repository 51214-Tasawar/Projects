const userroutes = require("../Controller/userControllers")
const {createuser , updateuser , getdelete} = require("../Validators/userValidator")
const route = require("express").Router()

route.post("/Create" , createuser ,userroutes.CreateUser)
route.get("/Get" ,getdelete,userroutes.GetUsers)
route.get("/Getone" ,getdelete,userroutes.GetUser)
route.patch("/Update" , updateuser,userroutes.UpdateUser)
route.delete("/Delete" ,getdelete,userroutes.DeleteUser)

module.exports = route ;