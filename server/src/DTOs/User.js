const { z } = require("zod");

const User = z.object({
  name: z
    .string({
      invalid_type_error: "O nome deve ser uma string",
      required_error: "O nome é obrigatório",
    })
    .regex(/^[a-zA-Z\s]+$/, { message: "O nome deve conter apenas letras" })
    .min(3, { message: "mínimo 3 caracteres" }),
  email: z
    .string({
      invalid_type_error: "O email deve ser uma string",
      required_error: "O email é obrigatório",
    })
    .email({ message: "Endereço de email inválido" }),
});

module.exports = {
  User
};