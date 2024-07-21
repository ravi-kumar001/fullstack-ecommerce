const express = require("express");
const {
  loginUser,
  registerUser,
  deleteUser,
  updateUser,
} = require("../Controllers/user");
const router = express.Router();
router.post("/login", loginUser);
router.post("/register", registerUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
module.exports = router;
