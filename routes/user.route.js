const express = require("express");
const route = express.Router();
const { register } = require("../controllers/user.controller");

route.get("/", (req, res) => {
  res.json({
    msg: "user server running",
  });
});

route.post("/", register);

module.exports = route;
