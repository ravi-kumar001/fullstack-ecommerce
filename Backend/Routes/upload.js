const express = require("express");
const { localFileUpload, imageUpload, videoUpload, imageSizeReducer } = require("../Controllers/upload");
const router = express.Router();
router.post("/localfileupload", localFileUpload);
router.post("/imageupload", imageUpload);
router.post("/videoupload", videoUpload);
router.post("/imagesizereducer", imageSizeReducer);
module.exports = router;
