const express = require("express")
const userRouter = require("./routes/user")
const bookRouter = require("./routes/book")

const app = express()


app.use([
    userRouter,
    bookRouter
])

app.listen(8080, () => {
    console.log("Servidor em execução")
})