const express = require("express");
const VideoController = require("../controllers/video.controller");

const router = express.Router();

router.get('/', new VideoController().getVideo);

module.exports = router