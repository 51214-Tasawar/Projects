module.exports=(res ,response)=>{
    try{
      if(response.error){
        throw response.error
      }
      return res.send({
        Status : 200 ,
        data : response.response ,
        error : {}
      })
    }catch(error){
    return res.send({
        Status : 400 ,
        error : response.error ,
        data : {}
      })
    }
}