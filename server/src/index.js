const express = require("express")

const app = express()

app.get("/user", (req, res) => {
    return res.send("[GET] Usuários")
})


app.post("/user", (req, res) => {
    return res.send("[POST] Usuários")
})


app.listen(8080, () => {
    console.log("Servidor em execução")
})