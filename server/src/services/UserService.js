const prisma = require("../generated/prisma/client");


const prismaClient = new prisma.PrismaClient();

module.exports = {
  getAll: async () => {
    return await prismaClient.user.findMany({include: { books: true}});
  },

  getById: async (id) => {
    return await prismaClient.user.findUnique({ where: { id }, include: {books: true}});
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
