const prisma = require("../generated/prisma/client");


const prismaClient = new prisma.PrismaClient();

module.exports = {
  getAll: async () => {
    return await prismaClient.user.findMany();
  },

  getById: async (id) => {
    return await prismaClient.user.findUnique({ where: { id } });
  },

  getByEmail: async (email) => {
    return await prismaClient.user.findUnique({ where: { email } });
  },

  create: async (userData) => {
    return await prismaClient.user.create({
      data: {
        ...userData,
      },
    });
  },

  delete: async (id) => {
    return await prismaClient.user.delete({
      where: { id },
    });
  },
};
