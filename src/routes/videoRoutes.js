// src/routes/videoRoutes.js
const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

// Endpoint: Video Thumbnail List - VideoID
router.get('/video/:VideoID', videoController.getVideoThumbnail);

module.exports = router;
