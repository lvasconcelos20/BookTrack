const prisma = require("../generated/prisma/client");

const prismaClient = new prisma.PrismaClient();

module.exports = {
  create: async (user) => {
    const CreateUser = await prismaClient.user.create({
      data: user,
    });
    return CreateUser;
  },

  getAll: async () => {
    try {
      const users = await prismaClient.user.findMany();
      return users;
    } catch (error) {
      throw new Error("Erro ao buscar usuários");
    }
  },

  getById: async (id) => {
    try {
      const user = await prismaClient.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error) {
      throw new Error("Erro ao buscar usuário");
    }
  },

  delete: async (id) => {
    try {
      const deletedUser = await prismaClient.user.delete({
        where: { id },
      });
      return deletedUser;
    } catch (error) {
      throw new Error("Erro ao deletar usuário");
    }
  },
};
