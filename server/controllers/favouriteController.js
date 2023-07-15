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
const addSongToFavourites = async (req, res) => {
    const {trackName, artistName} = req.body;

    try {
        let playlist = await Playlist.findOne({name: "Favourites Playlist"});

        if (!playlist) {
            const newPlaylist = new Playlist({
                name: "Favourites Playlist",
                songs: [],
            });
            playlist = await newPlaylist.save();
        }

        const newSong = {
            trackName: trackName,
            artistName: artistName,
        };

        playlist.songs.push(newSong);
        await playlist.save();

        res.json(newSong);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "failed to add song to favourites playlist"});
    }
};
    
// getting all of the songs that are in the favourites playlist
const getFavouriteSongs = async (req, res) => {
    try {
        const favouritesPlaylist = await Playlist.findOne({
            name: "Favourites Playlist",
        });

        if (!favouritesPlaylist) {
            return res.status(404).json({error: "favourites playlist not found"});
        }

        res.json(favouritesPlaylist.songs);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "failed to get favourites"})
    }
};

// removing a song from the favourites playlist
const removeSongFromFavourites = async (req, res) => {
    const {songId} = req.params;

    try {
        let favouritesPLaylist = await Playlist.findOne({
            name: "Favourites Playlist",
        });

        if (!favouritesPlaylist) {
            return res.status(404).json({error: "favourites playlist not found"});
        }

        favouritesPlaylist.songs = favouritesPlaylist.songs.filter(
            (song) => song._id.toString() !== songId
        );
        await favouritesPlaylist.save();

        res.json({message: "song removed from favourites"});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "failed to remove song from favourites"});
    }
};

module.exports = {getFavouritesPlaylist, addSongToFavourites, getFavouriteSongs, removeSongFromFavourites,
};

