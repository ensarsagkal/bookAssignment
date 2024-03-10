"use strict"
const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT
const HOST=process.env.HOST
app.use(express.json())



app.use(require("./app/errorHandler"))
app.listen(PORT,()=>console.log(`Server Running : http://${HOST}:${PORT}`))

