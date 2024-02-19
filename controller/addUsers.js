const userModel = require("../models/userModel")

const addUsers = async (req, res) => {
    const { firstName, lastName, email, contact } = req.body;
      
    try {
      const user = new userModel({
        firstName, lastName, email, contact: firstName, lastName, email, contact
      });
      user.save()
      // .then((status) => {
      //   console.log("status", status);
      // }).catch(err=>{
      //     console.log(err)
      // });
      // dataCount++ ;
      // if(dataCount >=5){
      //   res.status(403).json({message: "Data limit reached"})
      // }else{
      //   res.status(200).json(user);

      // }
      // console.log("getting data", user);
    } catch (err) {
      res.status(500).json({ err: "internal server error"});
      console.log(err)
    }
  };
 

  module.exports = addUsers