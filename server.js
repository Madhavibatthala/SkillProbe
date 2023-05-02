//creating express app which helps to create server 
const exp = require('express'); //returns a function
const app = exp(); //fun call create express object(referred by the name 'app') which contains http server internally 
//creating mongo client object
const mclient = require("mongodb").MongoClient; //connecting APIs with database
const path = require('path');
//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'./build')));
require("dotenv").config();
//db connection url
const DBurl = process.env.DATABASE_CONNECTION_URL;
const baseUrl = process.env.BASE_URL
mclient.connect(DBurl) //returns client object(promise) when connection is successful
.then((client)=>{ //consumes promise
    //get DB object
    let dbObj = client.db("First_data_base"); //name of the database is passed
    
    //create collection objects
    // let userCollectionObject = dbObj.collection("webdevcollection");
    // let mlCollectionObject = dbObj.collection("mlcollection");
    let userCollectionObject = dbObj.collection("usercollection");
    //sharing collection objects to APIs
    //set is used to add these collect objects to request
    // app.set("webdevCollectionObject",webdevCollectionObject); //key->string value->object
    // app.set("mlCollectionObject",mlCollectionObject);
    app.set("userCollectionObject",userCollectionObject);
    
    console.log("connection is successful");
})
.catch(err => console.log("Error in DB connection",err));
// const webdevApp = require("./apis/WebdevApi");
// const mlApp = require("./apis/MlApi");
const userApp = require("./apis/UserData");
//execute specific middleware based on path
// app.use("/webdev",webdevApp);
// app.use("/ml",mlApp);
app.use("/user",userApp);

app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'.build/index.html'));
})
app.use((request,response,next)=>{
    response.send({message:`path ${request.url} is invalid`});
})
//error handling middleware
app.use((error,request,response,next)=>{
    response.send({message : "error occured ",reason :`${error.message}`})
})
const port = process.env.PORT;
//assigning the port number
app.listen(port,() => console.log (`server listening on port ${port}..`) );
