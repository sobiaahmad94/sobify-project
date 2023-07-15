const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

// GET request for searching the songs, getting the keywords in the search box input to pull from that API to get the songs - calls the searchSongs() func from the searchController
router.get("/", searchController.searchSongs);

module.exports = router;