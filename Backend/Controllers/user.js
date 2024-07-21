const { User } = require("../DB/Modals/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({
      status: 401,
      message: "Please fill the all field",
    });
  }
  let user = await User.findOne({ email });
  if (!user) {
    res.json({
      status: 402,
      message: "User does't exist",
    });
  }

  const payload = {
    email: user?.email,
    role: user?.role,
    id: user?._id,
  };

  // password check
  if (await bcrypt.compare(password, user.password)) {
    var token = jwt.sign(payload, process.env.JWT_TOKEN, {
      expiresIn: "2h",
    });
    // console.log(typeof user);
    user = user.toObject();
    user.token = token;
    user.password = undefined;
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
      token,
      user,
      status: 200,
      message: "User logged In successfully",
    });
  }
};
const registerUser = async (req, res) => {
  // here  our server side logic will be written
  const { name, email, mobileNo, password } = req.body;
  var user = await User.findOne({ email });
  console.log(user);
  if (user) {
    res.json({
      message: "email is already used.Please use another email",
      status: 400,
    });
  } else {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    user = new User({
      name: name,
      email,
      mobileNo,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ message: "User created successfully" });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await User.findByIdAndDelete(id);
  res.json({ status: 200, message: "User deleted successfully" });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await User.findByIdAndUpdate(id, { ...req.body });
  res.json({ message: "User update successfully", status: 200 });
};
module.exports = { registerUser, loginUser, deleteUser, updateUser };
