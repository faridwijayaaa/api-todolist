require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  return (token = jwt.sign(payload, process.env.TOKEN));
};

const verifyToken = (token) => {
  return (decoded = jwt.verify(token, process.env.TOKEN));
};

module.exports = {
  generateToken,
  verifyToken,
};
