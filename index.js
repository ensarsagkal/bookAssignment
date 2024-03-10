"use strict"
const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT
const HOST=process.env.HOST
app.use(express.json())
require('express-async-errors')

app.use(require("./app/routes/bookRouter"))
app.use(require("./app/errorHandler"))
app.listen(PORT,()=>console.log(`Server Running : http://${HOST}:${PORT}`))

