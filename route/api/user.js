const route = require("express").Router()
route.get("/test",(req,res)=>{
        res.json("测试信息")
})
module.exports = route
