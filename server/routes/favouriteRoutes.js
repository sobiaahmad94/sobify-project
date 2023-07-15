const express = require("express");
const router = express.Router();
const favouriteController = require("../controllers/favouriteController");

// I'll use functions from the favouriteController
// GET request to get favourites playlist -calls the getFavouritesPlaylist() func 
router.get("/", favouriteController.getFavouritesPlaylist);

// POST request to add a song to the favourites playlist - calls the addSongToFavourites() func 
router.post("/songs", favouriteController.addSongToFavourites);

// GET request to get all of the favourite songs list - calls the getFavouriteSongs() func 
router.get("/songs", favouriteController.getFavouriteSongs);

// DELETE request to remove a song from favourites playlist - calls the removeSongFromFavourites() func
router.delete("/songs/:songId", favouriteController.removeSongFromFavourites);

// I don't think a PUT request would be relevant here but maybe in the playlistRoutes (imagine changing a song tile lololol)

module.exports = router;