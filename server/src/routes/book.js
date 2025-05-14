const express = require("express");
const ControllerBook = require("../controllers/BookController");
const router = express.Router();
const authenticate = require("../middlewares/auth")

router.get("/books/:userId", ControllerBook.getAllBook);

router.get("/books", ControllerBook.getAllBook);

router.post("/books", ControllerBook.create);

router.patch("/books/:id", ControllerBook.update);

router.delete("/books/:id",  ControllerBook.delete);

module.exports = router;
