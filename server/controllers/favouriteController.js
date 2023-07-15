const Playlist = require("../models/playlistModel");

// getting the favourites playlist
const getFavouritesPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findOne({name: "favourites playlist"});

        if (!playlist) {
            return res.status(404).json({error: "favourites playlist not found"});
        }

        res.json(playlist);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "failed to get favourites playlist"});
    }
};

// adding a song to the favourites playlist


// getting all of the songs that are in the favourites playlist

// removing a song from the favourites playlist

