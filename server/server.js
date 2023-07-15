// setting up express
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
app.use(express.json);

const mongodbLink = "mongodb://localhost:27017/"

app.listen(9000, () => {
    console.log(`the server's running here on http://localhost:${backEndPort}`);
})