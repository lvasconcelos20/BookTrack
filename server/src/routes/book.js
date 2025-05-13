const express = require("express");
const ControllerBook = require("../controllers/BookController")

const router = express.Router();


router.get("/books/:userId", ControllerBook.getAllByUser);

router.post("/books", ControllerBook.create);

router.patch("/books/:id", ControllerBook.update);

router.delete("/books/:id", ControllerBook.delete);

module.exports = router;
