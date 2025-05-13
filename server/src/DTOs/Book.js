const { z } = require("zod");

const Book = z
  .object({
    title: z.string().min(1, "O título é obrigatório"),
    author: z.string().optional(),
    status: z.enum(["LIDO", "LENDO", "QUERO_LER"], {
      required_error: "O status é obrigatório",
    }),
    evaluation: z.number().min(1).max(5).optional(),
    userId: z.number({
      required_error: "ID do usuário é obrigatório",
    }),
  })
  .refine(
    (data) => {
      if (data.evaluation !== undefined && data.status !== "LIDO") {
        return false;
      }
      return true;
    },
    {
      message: "A avaliação só pode ser registrada se o status for 'Lido'",
      path: ["evaluation"],
    }
  );


module.exports = {
    Book
}
