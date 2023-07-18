const Comment = require("../models/commentModel");

// getting comments grabbed 
exports.getComments = async (req, res) => {
try {
const comments = await Comment.find({ songId: req.params.songId });
res.json(comments);
} catch (error) {
console.error("Failed to fetch comments", error);
res.status(500).json({ error: "Failed to fetch comments" });
}
};

// adding comment grabbed
exports.addComment = async (req, res) => {
try {
const { songId } = req.params;
const { text } = req.body;


const comment = await Comment.create({ songId, text });
res.status(201).json(comment);



} catch (error) {
console.error("failed to add comment", error);
res.status(500).json({ error: "failed to add comment" });
}
};

commentModel.js

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
songId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Song",
required: true,
},
text: {
type: String,
required: true,
},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;