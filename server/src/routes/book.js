const express = require("express");
const ControllerBook = require("../controllers/BookController");
const router = express.Router();
const authenticateToken = require("../middlewares/auth")




router.get("/books/:userId", ControllerBook.getAllBook);

router.get("/books", ControllerBook.getAllBook);

router.post("/books", authenticateToken, ControllerBook.create);

router.patch("/books/:id", authenticateToken,  ControllerBook.update);

router.delete("/books/:id", authenticateToken, ControllerBook.delete);

module.exports = router;
