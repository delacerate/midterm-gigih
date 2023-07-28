// src/controllers/videoController.js
const Video = require('../models/video');

// GET /api/video/:VideoID
exports.getVideoThumbnail = async (req, res) => {
  try {
    const videoID = req.params.VideoID;

    // Find the video by VideoID in the MongoDB collection
    const video = await Video.findOne({ VideoID });

    if (video) {
      res.json({ Thumbnail: video.Thumbnail });
    } else {
      res.status(404).json({ error: 'Video not found' });
    }
  } catch (err) {
    console.error('Error fetching video:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = exports;
