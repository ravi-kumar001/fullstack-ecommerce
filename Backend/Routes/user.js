const express = require("express");
const {
  loginUser,
  registerUser,
  deleteUser,
  updateUser,
} = require("../Controllers/user");
const { auth, isAdmin } = require("../middlewares/validator");
const router = express.Router();
router.post("/login", loginUser);
router.post("/register", registerUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

// Protected Routes demo
router.post("/admin", auth, isAdmin, (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to Admin Dashboard",
  });
});
module.exports = router;
