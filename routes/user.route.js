const express = require("express");
const route = express.Router();
const {
  register,
  login,
  deleteUserById,
} = require("../controllers/user.controller");

route.get("/", (req, res) => {
  res.json({
    msg: "user server running",
  });
});

route.post("/register", register);
route.post("/login", login);
route.delete("/:userId", deleteUserById);

module.exports = route;
