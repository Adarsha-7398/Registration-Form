const mongoose = require("mongoose");

const userData = new mongoose.Schema(
  { firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    dateOfBirth: {type: Date, require: true},
    email: {type: String, require: true},
    contact: {type: Number, require: true}
  }
);

const userModel = mongoose.model("userModel", userData);
module.exports = userModel;
