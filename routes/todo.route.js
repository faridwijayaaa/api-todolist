const express = require("express");
const route = express.Router();
const { authentication } = require("../middleware/authentication");
const { getTodos, createTodo } = require("../controllers/todo.controllers");

route.get("/", authentication, getTodos);
route.post("/", authentication, createTodo);

module.exports = route;
