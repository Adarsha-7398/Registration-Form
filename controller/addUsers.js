const userCount = require("../controller/userCount");


const addUsers = async (req, res) => {
    const user_limit = 450;
    const { firstName, lastName, email, contact } = req.body;
    const users = await userCount()

    console.log("Number of users are",users)

      if(users < user_limit){
        try {
          const user = new userModel({
            firstName, lastName, email, contact: firstName, lastName, email, contact
          });
          user.save()
          res.status(200).json(user)
        } catch (err) {
          res.status(500).json({ err: "internal server error"});
          console.log(err)
        }
      }else{
          res.status(404).json({message : "User Limit reached. Cannot add"})
      }

  };
  

  module.exports = addUsers 