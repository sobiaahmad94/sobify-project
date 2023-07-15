// setting up express
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
app.use(express.json);

// sobify-music is the database 
const mongodbLink = "mongodb://localhost:27017/sobify-music";

// connecting to mongoose:)
mongoose.connect(mongdbLink, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    const backEndPort = 9000;

    app.listen(backEndPort, () => {
        console.log(`the server is running on port number ${backEndPort}`);
        console.log("I'm connected to mongoDB right now");
    });
})
.catch((error) => {
    console.error("oh no, failed to connect to mongodb", error);
});

// importing and using routes which'll be in reference to my other folder
// routes

// do app.use for them after


