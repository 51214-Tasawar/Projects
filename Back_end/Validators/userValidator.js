const ResponseHandler = require("../responseHandler");
const joiScheme = require("joi")

const createScheme = joiScheme.object({
   name : joiScheme.string().min(5).max(50).required(),
   username : joiScheme.string().min(6).max(50).required(),
   password : joiScheme.string().min(8).max(1000).required() ,
   email : joiScheme.string().email({minDomainSegments:2 , tlds:{allow : ["com"]}}).required()
})
const updateScheme = joiScheme.object({
    name : joiScheme.string().min(5).max(50).required(),
   username : joiScheme.string().min(6).max(50).required(),
   email : joiScheme.string().email({minDomainSegments:2 , tlds:{allow : ["com"]}}).required()
})
const getDeletScheme = joiScheme.object({
    username : joiScheme.string().min(6).max(50).required(),
})

module.exports = {
    createuser:async(req , res , next)=>{
    try{
   await createScheme.validateAsync(req.body)
   next()
    }catch(error){
    return ResponseHandler(res, {error:error});
    }
    } ,
    updateuser :async(req , res , next)=>{
    try{
   await updateScheme.validateAsync(req.body)
   next()
    }catch(error){
   return ResponseHandler(res, {error:error});
    }
    },
    getdelete:async(req , res , next)=>{
   try{
     await getDeletScheme.validateAsync(req.query)
     next()
   }catch(error){
    return ResponseHandler(res, {error:error});
   }
    }
}