const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = async (req, res, next) => {
  const { token } = req.body; // const token = req.body.token;

  if (!token) {
    res.json({
      status: 400,
      message: "Token is missing",
    });
  }

  // if token exist then verify first decode token in object form
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    console.log(decodedToken);
    req.user = decodedToken;
  } catch (error) {
    res.json({
      staus: 401,
      message: "Token is invalid",
    });
  }
  next();
};

const isAdmin = (req, res, next) => {
  //   console.log(req.user.role);
  try {
    if (req.user.role !== "admin") {
      return res.json({
        staus: 500,
        message: "This is protected route for admin",
      });
    }
  } catch (error) {
    res.json({
      status: 501,
      message: "User role is not matching",
    });
  }
  next();
};
module.exports = { auth, isAdmin };
