const exp = require("express");
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
userApp.use(exp.json());
userApp.get("/getuserdata",expressAsyncHandler(async(request,response)=>{
      let userCollectionObject = request.app.get("userCollectionObject");
      let users = await userCollectionObject.find().toArray();
      console.log(users);
      response.send({message : "all users data",payload : users});
 }));
userApp.post("/postuser",expressAsyncHandler(async(request,response)=>{
    let userCollectionObject = request.app.get("userCollectionObject");
    let userObj = request.body;
    console.log(userObj);
    let result = await userCollectionObject.insertOne(userObj)
    response.send({message : "user data added successfully"});
}));

module.exports = userApp;