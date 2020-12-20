/** @format */

require("dotenv/config");

const express = require("express");

const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");

const router = require("./src/routers/index");

const app = express();
app.use(cors());
//
const PORT = process.env.port || 8000
app.listen(port, () => {
  console.log(`server is running `);
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(logger("dev"));
app.use(router);
//
