const express = require("express");
const { getCategory } = require("../Controllers/category");
const { deleteCategory } = require("../Controllers/category");
const { updateCategory } = require("../Controllers/category");
const { postCategory } = require("../Controllers/category");
const router = express.Router();

router.get("/", getCategory);
router.get("/:id", getCategory);
router.post("/", postCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);

module.exports = router;
