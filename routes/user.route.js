const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.json({
    msg: "user server",
  });
});

module.exports = route;
