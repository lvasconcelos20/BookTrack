const prisma = require("../generated/prisma/client");

const prismaClient = new prisma.PrismaClient();

module.exports = {
  getAll: async () => {
    return await prismaClient.book.findMany({
     include: {
        user: true
     }
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
  
   getById: async(id) => {
    
    try {
        const book = await prismaClient.book.findUnique({
            where: { id },
            include: {
                user: true
            }
        })
        return book
    } catch (error) {
        throw new Error('Erro ao buscar o livro')
    }
  },

  deleteBook: async (id) => {
    return await prismaClient.book.delete({
      where: { id },
    });
  },

 
};
