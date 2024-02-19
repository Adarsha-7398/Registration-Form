const userModel = require("../models/userModel")

const deleteUsers = async (req, res) => {
    try {
      const { id } = req.params;
      await userModel.findByIdAndDelete(id);
      res.json({ message: "Todo deleted successfully" });
    } catch (err) {
      res.status(500).json({ err: "Internal server error" });
      console.log(err);
    }
  };

  module.exports = deleteUsers