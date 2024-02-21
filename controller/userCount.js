const userModel = require("../models/userModel")

async function userCount(){
   return await userModel.countDocuments().then(data=>{
        return data;
    })
}
module.exports = userCount;