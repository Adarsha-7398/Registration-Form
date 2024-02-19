const userModel = require("../models/userModel")

const updateUsers = async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, email, contact } = req.body;
      const users = await userModel.findByIdAndUpdate(
        id,
        {firstName, lastName, email, contact: firstName, lastName, email, contact}
      );
      res.json(users);
    } catch (err) {
      res.status(500).json({ err: "Internal server error" });
    }
  };

 module.exports = updateUsers