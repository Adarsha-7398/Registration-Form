const router = require('express').Router()
const addUsers = require("../controller/addUsers")
const getUsers = require("../controller/getUsers")
const deleteUsers = require("../controller/deleteUsers")
const updateUsers = require("../controller/updateUsers")

router.route("/addUsers").post(addUsers);
router.route("/getUsers").get(getUsers);
router.route("/deleteUsers/:id").delete(deleteUsers);
router.route("/updateUsers/:id").put(updateUsers);


module.exports = router;