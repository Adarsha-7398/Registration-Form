const router = require('express').Router()
const addUsers = require("../controller/addUsers")

router.route("/addUsers").post(addUsers);


module.exports = router;