const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");

route.get("/", (req, res) => {
  res.json({
    msg: "Server is running",
  });
});

route.use("/users", userRoute);

module.exports = route;
