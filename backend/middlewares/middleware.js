const express = require("express");
const middleware  = (app)=>{


    app.use((req,res,next)=>{

        console.log(`request is comming from ${req.url} and method is ${req.method}`);
        next();

    });


    app.use(express.json());

    app.use(express.urlencoded({extended:true}));

}

module.exports = middleware;