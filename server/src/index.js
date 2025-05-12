const express = require("express")
const userRouter = require("./routes/user")

const app = express()


app.use([
    userRouter
])

app.listen(8080, () => {
    console.log("Servidor em execução")
})