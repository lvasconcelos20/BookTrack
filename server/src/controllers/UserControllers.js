const UserService = require("../services/UserService");
const UserValidation = require("../DTOs/User");

module.exports = {
  getAll: async (req, res) => {
    try {
      const users = await UserService.getAll();
      return res.json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar usuários", error });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await UserService.getById(id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar usuário", error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const user = req.body;
      const UserCreate = await UserService.create(user);
      return res.json(UserCreate);
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Erro ao criar usuário", error: error.message });
    }
  },

   delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await UserService.delete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.json({ message: "Usuário deletado com sucesso", deletedUser });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar usuário", error: error.message });
    }
  },
};
