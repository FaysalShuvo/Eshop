const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// connecting Mongoose
const mongoURI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rvp8s.mongodb.net/shop?retryWrites=true&w=majority`;

try {
  // Connect to the MongoDB cluster
  mongoose.connect(mongoURI, () => console.log(" Mongoose is connected"));
} catch (err) {
  console.log("could not connect", err);
}

app.listen(process.env.PORT || 4000, () => {
  console.log("post is 4000");
});
