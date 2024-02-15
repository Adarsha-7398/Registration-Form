import userModel from "../models";

const addUsers = async (req, res) => {
    const { newUser } = req.body;
  
    try {
      const user = new userModel({
        userInfo: newUser
      });
      user.save().then((status) => {
        console.log("status", status);
  
      }).catch(err=>{
          console.log(err)
      });
  
      res.status(200).json(user);
      console.log("getting data", user);
    } catch (err) {
      res.status(500).json({ err: "internal server error"});
      console.log(err)
    }
  };

  module.exports = addUsers