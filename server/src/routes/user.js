const express = require("express");
const ControllerUser = require("../controllers/UserControllers")

const router = express.Router();

router.get("/users", ControllerUser.getAll);

router.get("/users/:id", ControllerUser.getById);

router.post("/users", ControllerUser.create);

router.delete("/users/:id", ControllerUser.delete);

module.exports = router;
