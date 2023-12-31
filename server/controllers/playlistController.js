const Playlist = require("../models/playlistModel");

// getting all the playlists
const getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find();
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
const addSongToPlaylist = async (req, res) => {
    const { playlistId } = req.params;
    const { trackName, artistName } = req.body;
  
    try {
        console.log("it worked")
        console.log(playlistId)
      const playlist = await Playlist.findById(playlistId);
      console.log(playlist)
  
      if (!playlist) {
        return res.status(404).json({ error: "playlist wasn't found" });
      }
  
      const newSong = {
        trackName: trackName,
        artistName: artistName,
      };
  
      // this is adding the new song to the songs array 
      playlist.songs.push(newSong); 
      await playlist.save();
  
      // returning the updated playlist thing, collection
      res.json(playlist); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "oh man, failed to add song to playlist" });
    }
  };

// deleting a playlist
const deletePlaylist = async (req, res) => {
    const {playlistId} = req.params;

    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete(playlistId);

        if (!deletedPlaylist) {
            return res.status(404).json({error: "playlist not found"});
        }

        res.json({message: "playlist deleted"});
    } catch (error) {
        res.status(500).json({error: "failed to delete playlist"});
    }
};

// deleting a song from playlist
const deleteSongFromPlaylist = async (req,res) => {
    const {playlistId, songId} = req.params;

    try {
        const playlist = await Playlist.findById(playlistId);

        if (!playlist) {
            return res.status(404).json({error: "playlist wasn't found"});
        }

        playlist.songs = playlist.songs.filter(
            (song) => song._id.toString() !== songId
        );
        await playlist.save();

        res.json({message: "song was deleted from playlist"});
    } catch (error) {
        res.status(500).json({error: "failed to delete song from playlist"});
    }
};

// getting all of the songs from a playlist
const getPlaylistSongs = async (req, res) => {
    const { playlistId } = req.params;

    try {
        const playlist = await Playlist.findById(playlistId);
        
    if (!playlist) {
        
        return res.status(404).json({ error: "playlist not found"});
    }
    
    res.json(playlist.songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "failed to get playlist songs"});
    }
};

  // updating the playlist name by by the id
  const updatePlaylistName = async (req, res) => {
    const { playlistId } = req.params;
    const { name } = req.body;
  
    try {
      const playlist = await Playlist.findByIdAndUpdate(
        playlistId,
        { name },
        { new: true }
      );
  
      if (!playlist) {
        return res.status(404).json({ error: "oh no, playlist not found" });
      }
  
      res.json(playlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "failed to update playlist name" });
    }
  };
  
  module.exports = { getPlaylists, createPlaylist, addSongToPlaylist, deletePlaylist, deleteSongFromPlaylist, getPlaylistSongs, updatePlaylistName, 
  };