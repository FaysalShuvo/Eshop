const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

// middleware
app.use(express.json());
app.use(cors());

// connecting Mongoose
const mongoURI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.rvp8s.mongodb.net/shop?retryWrites=true&w=majority`;
try {
  mongoose.connect(mongoURI, () => console.log(" Mongoose is connected"));
} catch (err) {
  console.log("could not connect", err);
}

// routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 4000, () => {
  console.log("post is 4000");
});
