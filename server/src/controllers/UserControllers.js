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
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

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
      const parsedUser = UserValidation.User.parse(req.body);

      const exists = await UserService.getByEmail(parsedUser.email);
      if (exists) {
        return res.status(400).json({ message: "E-mail já registrado" });
      }

      const createdUser = await UserService.create(parsedUser);
      return res.status(201).json({
        message: "Usuário criado com sucesso",
        data: createdUser,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao criar usuário",
        error: error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const  id  = parseInt(req.params.id, 10);
      const deletedUser = await UserService.delete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.json({ message: "Usuário deletado com sucesso", deletedUser });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao deletar usuário", error: error.message });
    }
  },

 
};
