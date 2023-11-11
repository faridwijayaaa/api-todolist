const { Todos } = require("../models");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const authUserId = res.dataUser.id;

      let data = await Todos.findAll({
        attributes: ["id", "value", "status"],
        where: {
          userId: authUserId,
        },
      });

      return res.status(200).json({
        message: "succesfully get todo data",
        data: data,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createTodo: async (req, res) => {
    try {
      const { value } = req.body;
      const authUserId = res.dataUser.id;

      const todo = await Todos.create({
        value,
        status: false,
        userId: authUserId,
      });

      return res.status(201).json({
        message: "sucessfully create todo",
        todo: todo,
      });
    } catch (error) {
      let errorMes = error.name;
      if (
        errorMes === "SequelizeUniqueConstraintError" ||
        errorMes === "SequelizeValidationError"
      ) {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json(error);
    }
  },
};
