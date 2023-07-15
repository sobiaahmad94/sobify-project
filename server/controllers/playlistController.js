const Playlist = require("../models/playlistModel");

// getting all the playlists
const getPlaylists = async (req, res) => {
    try {
        const playlists = await.Playlist.find();
        res.json(playlists);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "failed to get the playlists"});
    }
};

// creating a new playlist
const createPlaylist = async (req, res) => {
    const {name} = req.body;

    try {
        const newPlaylist = new Playlist({name, songs: [] })
        const createdPlaylist = await newPlaylist.save();

        res.json(createdPlaylist);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "failed to create playlist"});
    } 
};

// adding a song to a playlist
const songToPlaylist = async (req,res) => {
    const {playlistId} = req.params;
    const {trackName, artistName} = req.body;

    try {
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({error: "playlist hasn't been found"})
        }

        // the newSong object has the song name and artist name
        const newSong = {
            trackName: trackName,
            artistName: artistName,
        };

        playlist.songs.push(newSong);
        await playlist.save();

        res.json(newSong);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "failed to add song to playlist"});
    }
};

// deleting a playlist

// deleting a song from playlist

// getting all of the songs from a playlist
    

