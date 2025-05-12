const express = require("express");
const ControllerUser = require("../controllers/UserControllers")

const router = express.Router();

router.get("/user", ControllerUser.get);

router.post("/user", ControllerUser.create);

router.delete("/user", ControllerUser.delete);

module.exports = router;
