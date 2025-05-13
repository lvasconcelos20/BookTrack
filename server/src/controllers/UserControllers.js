const UserService = require("../services/UserService");

module.exports = {
  get: (req, res) => {
    return res.send("[GET] Usuários");
  },

  create: async (req, res) => {
    try {
      const user = req.body;
      const UserCreate = await UserService.create(user);
      return res.json(UserCreate);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  delete: (req, res) => {
    return res.send("[DELETE] Usuários");
  },
};
