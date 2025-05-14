const BookService = require("../services/BookService");
const UserService = require("../services/UserService");
const BookValidation = require("../DTOs/Book");

module.exports = {
  create: async (req, res) => {
    try {
      const parsedBook = BookValidation.Book.parse(req.body);

      if (parsedBook.status !== "LIDO" && parsedBook.evaluation !== undefined) {
        return res.status(400).json({
          message: "Avaliação só pode ser registrada se o status for 'LIDO'",
        });
      }
      console.log("BookService:", BookService);

      const createdBook = await BookService.create(parsedBook);
      return res.status(201).json({
        message: "Livro criado com sucesso",
        data: createdBook,
      });
    } catch (error) {
      console.log("Erro ao criar livro:", error);
      return res.status(400).json({
        message: "Erro ao criar livro",
        error: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

      const existingBook = await BookService.getById(id);
      if (!existingBook)
        return res.status(404).json({ message: "Livro não encontrado" });

      if (existingBook.userId !== req.user.id) {
        return res
          .status(403)
          .json({ message: "Acesso negado: livro de outro usuário" });
      }

      if (existingBook.status === "LIDO") {
        return res
          .status(400)
          .json({ message: "Livros com status 'LIDO' não podem ser editados" });
      }

      const parsedBook = BookValidation.Book.partial().parse(req.body);

      if (
        parsedBook.evaluation !== undefined &&
        (parsedBook.status ?? existingBook.status) !== "LIDO"
      ) {
        return res.status(400).json({
          message: "Avaliação só pode ser registrada se o status for 'LIDO'",
        });
      }

      const updatedBook = await BookService.update(id, parsedBook);
      return res.json({ message: "Livro atualizado com sucesso", updatedBook });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao atualizar livro",
        error: error.errors ?? error.message,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const bookId = parseInt(req.params.id, 10);
      if (isNaN(bookId)) {
        return res.status(400).json({ message: "ID inválido" });
      }

      const userId = req.user.id;

      const existingBook = await BookService.getById(bookId);
      if (!existingBook) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

      if (existingBook.userId !== userId) {
        return res
          .status(403)
          .json({ message: "Acesso negado: livro de outro usuário" });
      }

      const deletedBook = await BookService.deleteBook(bookId);
      return res.json({ message: "Livro deletado com sucesso", deletedBook });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao deletar livro", error: error.message });
    }
  },

  getAllBook: async (req, res) => {
    try {
      const books = await BookService.getAll();
      return res.json(books);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar livros", error: error.message });
    }
  },

  getBook: async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);

      if (isNaN(id)) {
        return res.status(400).json({ message: "ID inválido" });
      }

    
      const book = await BookService.getById(id);

      if (!book) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }

   
      return res.json(book);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar livro", error: error.message });
    }
  },
};
