const express = require('express');
const commentController = require('../controllers/commentControllers');

const router = express.Router();

// Endpoint: Comment List - VideoID
router.get('/comment/:VideoID', async (req, res) => {
  try {
    const comments = await commentController.getCommentList(req.params.VideoID);
    res.send(comments);
  } catch (err) {
    // Handle errors
    res.status(500).send('Error fetching comment list.');
  }
});

// Endpoint: Submit Comment
router.post('/comment', async (req, res) => {
  try {
    const newComment = await commentController.submitComment(req.body);
    res.send(newComment);
  } catch (err) {
    // Handle errors
    res.status(500).send('Error submitting comment.');
  }
});

module.exports = router;
