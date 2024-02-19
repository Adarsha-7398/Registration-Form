const userModel = require("../models/userModel")

const getUsers = async (req, res) => {
    try {
      const users = await userModel.find();
      res.json(users);
    } catch (err) {
      throw new Error(err);
    }
  };

  module.exports = getUsers