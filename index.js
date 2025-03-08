import express from "express"
import create_password from "./my_module/gerador_senha.js"

const App = express()

App.get("/create_password/:password_length", (req, res) => {

  const { password_length } = req.params

  if (!password_length) {
    return res.status(400).send("Por favor, coloque uma largura de senha")
  }

  const regex = /^\d+$/
  if (!regex.test(password_length)) {
    return res.status(400).send("Coloque somente números")
  }

  res.status(200).json({
    your_password: create_password(Number(password_length))
  })
})

App.listen(3000, () => {
  console.log("Servidor rodando")
})