
// app.get("/about", (req, res) =>{
//     res.status(200).send('This is my about page')
// });

const express = require("express");
const router = express.Router();

// router.get("/", (req, res) =>{
//     res.status(200).send('Hello Router')
// });

router.route("/").get((req,res) => {
    res.status(200).send("Hello Router");
});


router.route("/register").get((req,res) => {
    res.status(200).send("Hello Register Router");
});

module.exports = router;

