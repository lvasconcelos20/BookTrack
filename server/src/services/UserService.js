const prisma = require("../generated/prisma/client");

const prismaClient = new prisma.PrismaClient();

module.exports = {
  create: async (user) => {
    const CreateUser = await prismaClient.user.create({
      data: user,
    });
    return CreateUser;
  },
};
