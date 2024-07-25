const cookieParser = require("cookie-parser");
const express = require("express");
const { main } = require("./DB/db");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

const userRoute = require("./Routes/user");
const catagoryRoute = require("./Routes/category");
const uploadRoute = require("./Routes/upload");

var cors = require("cors");
app.use(cors());

// Mongo atlas connect
main().catch((err) => console.log(err));

// Cloudinary se connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Body parser
var bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());

// Use cookie-parser middleware
app.use(cookieParser());

// Use file-upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/user", userRoute);
app.use("/api/category", catagoryRoute);
app.use("/api/upload", uploadRoute);
