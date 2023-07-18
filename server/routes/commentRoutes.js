const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// GET request
// getting all of the comments that are about a song
router.get("/:songId", commentController.getComments);

// POST request
// adding a comment to a particular song
router.post("/:songId", commentController.addComment);

module.exports = router;



