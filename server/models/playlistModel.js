const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
    name: String, 
    songs: [{
        trackName: String,
        artistName: String,
    }]
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;