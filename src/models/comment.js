// src/models/comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Comment: { type: String, required: true },
  VideoID: { type: String, required: true },
  Timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
