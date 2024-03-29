const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cartRoute = require("./routes/cartRoute.js");
const historyRoute = require("./routes/historyRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/Cart", cartRoute);
app.use("/History", historyRoute);
app.use("/Main", reviewRoute);

mongoose
  .connect("mongodb+srv://harshrajsaxena18:harsh@eats.2q8v7hn.mongodb.net/?retryWrites=true&w=majority&appName=eats")
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
