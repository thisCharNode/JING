const express = require("express");
const passport = require("passport")
const mongoose = require("mongoose")
const api = require("./config/api")
const user = require("./route/api/user")
const mongooseurl =api.url
const app  =express();
mongoose.connect(mongooseurl)
        .then(()=>{
            console.log("数据库已连接");
        })
        .catch((err)=>{
            console.log("失败"+err);
        })
app.use("/api",user)
const port  = process.env.port||5111
app.get("/",(req,res)=>{
    res.json("hell word")
})
app.listen(port,()=>{
    console.log(`server start${port}`);
})
