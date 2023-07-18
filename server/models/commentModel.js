const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
songId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song",
    required: true,
},

})