const mongoose = require("mongoose")

const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
app.use(bodyparser.json())

const routes = require("./routes/index")
// console.log(csrfProtection())

app.use(express.static('views'));
app.use("/", routes)

mongoose.connect("mongodb://127.0.0.1:27017/Users").then((status)=>{
    console.log("Database connected")
    app.listen(port, ()=>{console.log("App listening on port: 3000")})
}).catch((error)=>{
    console.log("Database not connected", error)
})
