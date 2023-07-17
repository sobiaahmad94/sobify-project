const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  songs: [
    {
        // these are the details I want
      trackName: String,
      artistName: String,
    },
  ],
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
