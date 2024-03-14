const router = require('express').Router()
const addUsers = require("../controller/addUsers")
const getUsers = require("../controller/getUsers")
const deleteUsers = require("../controller/deleteUsers")
const updateUsers = require("../controller/updateUsers")
const authenticateUser = require("../middleware/auth")

// const razorpayPayment = require("../controller/razorpayPayment")
const createRazorpayOrder = require("../controller/createRazorpayOrder")
const verifyRazorpayPayment = require("../controller/verifyRazorpayPayment")

// Users Router
router.post("/addUsers", authenticateUser, addUsers);
router.get("/getUsers" , getUsers);
router.delete("/deleteUsers/:id", authenticateUser, deleteUsers);
router.put("/updateUsers/:id", authenticateUser, updateUsers);


// Razorpay routers
// router.get("/razorpay", razorpayPayment);
router.post("/createRazorpayOrder", createRazorpayOrder);
router.post("/verifyRazorpayPayment", verifyRazorpayPayment)




module.exports = router;