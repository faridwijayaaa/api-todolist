const { User } = require("../models");
const { hashPassword, comparePassword } = require("../helper/bcrypt");
const { generateToken } = require("../helper/jwt");

module.exports = {
  register: async (req, res) => {
    try {
      let { username, email, password } = req.body;

      if (!password) {
        return res.status(400).json({ message: "password cannot be empty" });
      }

      const hashedPassword = hashPassword(password);
      await User.create({
        username,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({
        username,
        email,
      });
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json({ msg: error });
    }
  },
};
