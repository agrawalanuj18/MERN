
// app.get("/about", (req, res) =>{
//     res.status(200).send('This is my about page')
// });

const express = require("express");
// const {home, register} = require("../contollers/auth-controller");
const authcontroller = require("../contollers/auth-controller");
const router = express.Router();
// router.get("/", (req, res) =>{
//     res.status(200).send('Hello Router')
// });

router.route("/").get(authcontroller.home);
router.route("/register").get(authcontroller.register);

module.exports = router;

