const userCount = require("../controller/userCount");
const userModel = require("../models/userModel");

const addUsers = async (req, res) => {
  const user_limit = 450;
  const { firstName, lastName, dateOfBirth, email, contact } = req.body;
  const users = await userCount();

  console.log("Number of users are", users);

  if (users < user_limit) {
    const user = new userModel({
      firstName,
      lastName,
      dateOfBirth,
      email,
      contact: firstName,
      lastName,
      dateOfBirth,
      email,
      contact
    });
    
    user.save()
      .then((status) => {
        return res.status(200).json({ user, status });
      })
      .catch((err) => {
        console.log(err);
        if (err.code === 11000) {
          new Error(res.json({ message: "user exist" }));
          console.log("Task exist");
        } else {
          res.status(500).json({ error: "internal server error" });
        }
      });
  } else {
    res.status(404).json({ message: "User Limit reached. Cannot add" });
  }
};


module.exports = addUsers;
