const express = require("express");

const router = express.Router();


router.get("/book", (req, res) => {
  return res.send("[GET] Livros");
});

router.post("/book", (req, res) => {
  return res.send("[POST] Livros");
});

router.patch("/book", (req, res) => {
  return res.send("[PATCH] Livros");
});

router.delete("/book", (req, res) => {
  return res.send("[DELETE] Livros");
});

module.exports = router;
