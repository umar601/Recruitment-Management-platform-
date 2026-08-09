const mongoose = require("mongoose");


const databaseConnection = async (url)=>{

    mongoose.connect(url)
    .then((res)=>{
        console.log("database connection is successfull. ");
    })
    .catch((err)=>{
        console.log("some error is connecting with database. ",err);
    })

}


module.exports = databaseConnection;