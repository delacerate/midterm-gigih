const Comment = require('../models/comment');

// GET /api/comment/:VideoID
exports.getCommentList = async (req, res) => {
  try {
    const videoID = req.params.VideoID;

    // Find the comments for the given VideoID in the MongoDB collection
    const comments = await Comment.find({ VideoID });

    res.json(comments);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST /api/comment
exports.submitComment = async (req, res) => {
  try {
    const { Username, Comment, VideoID } = req.body;

    // Create a new comment in the MongoDB collection
    const newComment = await Comment.create({
      Username,
      Comment,
      VideoID,
      timestamp: new Date(),
    });

    res.json({ success: true, comment: newComment });
  } catch (err) {
    console.error('Error submitting comment:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
