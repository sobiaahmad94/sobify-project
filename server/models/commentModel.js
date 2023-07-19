const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  songId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, 
  },
  text: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
