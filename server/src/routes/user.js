const express = require("express");
const ControllerUser = require("../controllers/UserControllers");
const UserService = require("../services/UserService")
const jwt = require("jsonwebtoken");

const router = express.Router();



router.post("/auth/user", async (req, res) => {
  try {
    const { email } = req.body;

  
    const user = await UserService.findByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const secret = process.env.JWT_SECRET;

    const token = jwt.sign(
      { id: user.id },
      secret,
      { expiresIn: "1d" }
    );

    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

router.get("/users", ControllerUser.getAll);

router.get("/users/:id", ControllerUser.getById);

router.post("/users", ControllerUser.create);

router.delete("/users/:id", ControllerUser.delete);

module.exports = router;
