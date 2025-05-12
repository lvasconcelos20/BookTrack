const express = require("express")

const router = express.Router()


router.get("/user", (req, res) => {
    return res.send("[GET] Usuários")
})


router.post("/user", (req, res) => {
    return res.send("[POST] Usuários")
})

router.delete("/user", (req, res) => {
    return res.send("[DELETE] Usuários")
})

module.exports = router;