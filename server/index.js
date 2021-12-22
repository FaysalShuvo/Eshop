const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/user");

// middleware
app.use(express.json());

// connecting Mongoose
const mongoURI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rvp8s.mongodb.net/shop?retryWrites=true&w=majority`;
try {
  mongoose.connect(mongoURI, () => console.log(" Mongoose is connected"));
} catch (err) {
  console.log("could not connect", err);
}

// routes
app.use("/api/user/", userRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log("post is 4000");
});
