const mongoose = require("mongoose");

const Comment = require("../models/commentModel");

// getting all comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ songId: req.params.songId });
    res.json(comments);
  } catch (error) {
    console.error("failed to fetch comments", error);
    res.status(500).json({ error: "oh no failed to fetch comments" });
  }
};

// adding a comment 
const addComment = async (req, res) => {
  try {
    const { songId } = req.params;
    const { text } = req.body;

    console.log("Song ID:", songId); // Check the songId value

    const comment = await Comment.create({ songId, text });
    res.status(201).json(comment);
  } catch (error) {
    console.error("failed to add the comment", error);
    res.status(500).json({ error: "failed to add the commenttttt" });
  }
};

module.exports = {
  getComments,
  addComment
};
