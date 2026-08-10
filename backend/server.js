const express = require("express");

const app = express();

const port = 8080;

const url = "mongodb://127.0.0.1:27017/recuritmentPlatform"

const databaseConnection = require("./config/databaseConnection");

const middleware = require("./middlewares/middleware");


middleware(app);


// console.log(typeof(databaseConnection))

databaseConnection(url)


app.use("/",(req,res)=>{

    res.send("backend working");

})



app.listen(port,(req,res)=>{

    console.log(`app is listening at ${port} port.`)

})