const mongoose = require("mongoose")

const app = require('express')()
const port = 3000
const bodyparser = require('body-parser')
app.use(bodyparser.json())

const routes = require("./routes/index")


app.use("/", routes)

app.listen(port, ()=>{console.log("App listening on port: 3000")})

mongoose.connect("mongodb://127.0.0.1:27017/Users")

