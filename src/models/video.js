const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  VideoID: {
    type: String,
    required: true,
    unique: true,
  },
  Url: {
    type: String,
    required: true,
  },
  Thumbnail: {
    type: String,
    required: true,
  },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
