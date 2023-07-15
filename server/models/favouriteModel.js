const mongoose = require("mongoose");

// a mongoose scheme is basically a document
// https://mongoosejs.com/docs/guide.html#models
const favouriteSchema = new mongoose.Schema({
    trackName: String,
    artistName: String,
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

module.exports = Favourite;