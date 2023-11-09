const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send('Hello and I am learning Mern Stack development')
});

app.get("/about", (req, res) =>{
    res.status(200).send('This is my about page')
});

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`server is running at: ${PORT}`)
});