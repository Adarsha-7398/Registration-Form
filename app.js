const mongoose = require("mongoose")
const app = require('express')()
const port = 3000
const bodyparser = require('body-parser')
app.use(bodyparser.json())

const routes = require("./routes/index")
// const { collection } = require("./models/userModel")
// const userModel = require("./models/userModel")

app.use("/", routes)

// async function getdata(){
//     // const database = await Collection('Users')
    
// }
// getdata()
// const documentCount =  Users.userModels.countDocuments()
//     console.log(documentCount)

// const documentCount = database.collection('userModels').countDocuments()
// console.log("Number of documents", documentCount)

app.listen(port, ()=>{console.log("App listening on port: 3000")})

mongoose.connect("mongodb://127.0.0.1:27017/Users")

