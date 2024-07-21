const express = require("express");
const { main } = require("./DB/db");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
const userRoute = require("./Routes/user");
const catagoryRoute = require("./Routes/category");

var cors = require("cors");
app.use(cors());

main().catch((err) => console.log(err));

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api/user", userRoute);
app.use("/api/category", catagoryRoute);
