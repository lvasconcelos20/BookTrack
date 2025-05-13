const prisma = require("../generated/prisma/client");

const prismaClient = new prisma.PrismaClient();

module.exports = {
  getAll: async (userId) => {
    return await prismaClient.book.findMany({
      where: { userId },
      orderBy: { date_conclusion: "desc" },
    });
  },

  create: async (bookData) => {
    if (bookData.status === "LIDO" && !bookData.date_conclusion) {
      bookData.date_conclusion = new Date();
    }

    return await prismaClient.book.create({ data: bookData });
  },

  update: async (id, updatedData) => {
    if (updatedData.status === "LIDO" && !updatedData.date_conclusion) {
      updatedData.date_conclusion = new Date();
    }

    return await prismaClient.book.update({
      where: { id },
      data: updatedData,
    });
  },

  delete: async (id) => {
    return await prismaClient.book.delete({
      where: { id },
    });
  },
};
