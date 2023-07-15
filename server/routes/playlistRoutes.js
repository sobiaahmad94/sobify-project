const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

// uses the functions from the playlistController
// GET request to get all the playlists - calls the getPlaylists() func
router.get("/", playlistController.getPlaylists);
// POST request to add a new playlist to playlists - calls the createPlaylist() func
router.post("/", playlistController.createPlaylist);
// POST request to add a song to the playlist - calls the addSongToPlaylist (playlistId is the id of the playlist obvs)
router.post("/:playlistId/songs", playlistController.addSongToPlaylist);
// DELETE request to delete a playlist from playlists - calls deletePlaylist() func
router.delete("/:playlistId", playlistController.deletePlaylist);
// DELETE request to delete a song from a playlist - calls deleteSongFromPlaylist() func
router.delete("/:playlistId/songs/:songId", playlistController.deleteSongFromPlaylist);
// GET request to get all the songs in a playlist based on playlistId - calls getPlaylistSongs() func
router.get("/:playlistId/songs", playlistController.getPlaylistSongs);

module.exports = router;

