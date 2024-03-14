const mongoose = require("mongoose");

const userData = new mongoose.Schema(
  { firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    dateOfBirth: {type: Date, require: true},
    email: {type: String, require: true, unique: true},
    contact: {type: Number, require: true, unique: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  }
);



const userModel = mongoose.model("userModel", userData);
module.exports = userModel;
