const mongoose = require("mongoose")
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')
app.use(bodyparser.json())

const routes = require("./routes/routes")
// console.log(csrfProtection())
app.use(cors({
    origin : ["registration-form-pg7q9nbs2-adarsha-pathaks-projects.vercel.app"],
    methods : ["POST", "GET"],
    credentials : true
}))

app.use(express.static('views'));
app.use("/", routes)

app.get("/", (req, res){
    res.json("Hello world")
})

mongoose.connect("mongodb://127.0.0.1:27017/Users").then((status)=>{
    console.log("Database connected")
    app.listen(port, ()=>{console.log("App listening on port: 3000")})
}).catch((error)=>{
    console.log("Database not connected", error)
})


module.exports = app