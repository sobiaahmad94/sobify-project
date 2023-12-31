// setting up express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());

//enabling cors
app.use(cors());


// sobify-music is the database 
const mongodbUri = "mongodb://localhost:27017/sobify-music";

// connecting to mongoose:)
mongoose.connect(mongodbUri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    const backEndPort = 8000;

    app.listen(backEndPort, () => {
        console.log(`the server is running on port number ${backEndPort}`);
        console.log("I'm connected to mongoDB right now");
    });
})
.catch((error) => {
    console.error("oh no, failed to connect to mongodb", error);
});

// importing and using the views (routes as I've called then that) which'll be in reference to my other routes folder
// routes 
const playlistRoutes = require("./routes/playlistRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
const searchRoutes = require("./routes/searchRoutes");
const commentRoutes = require("./routes/commentRoutes");


// do app.use for them after

app.use("/api/playlists", playlistRoutes);
app.use("/api/favourites", favouriteRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/comments", commentRoutes);




