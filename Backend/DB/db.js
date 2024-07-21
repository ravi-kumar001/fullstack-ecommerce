// getting-started.js
const mongoose = require("mongoose");
const { User } = require("./Modals/user");

async function main() {
  const url = process.env.MONGO_ATLAS_URL;
  await mongoose.connect(url);
  console.log("DataBase connected successfully");
}

// const user = new User({
//   name: "Ravi Kumar",
//   age: 21,
//   mobileNo: 9523109388,
// });
// user.save();
module.exports = { main };
