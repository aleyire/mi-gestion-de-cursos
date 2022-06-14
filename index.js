const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const nuevoCurso = require("./src/consultas/nuevoCurso")
const prepararCurso = require("./src/consultas/prepararCurso")
const editarCurso = require("./src/consultas/editarCurso")
const eliminarCurso = require("./src/consultas/eliminarCurso")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3000, console.log("Server on"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/cursos", async (req, res) => {
  const { nombre } = req.body
  const { nivelTecnico } = req.body
  const { fechaInicio } = req.body
  const { duracion } = req.body
  const respuesta = await nuevoCurso(nombre, nivelTecnico, fechaInicio, duracion)
  res.send(respuesta)
})

app.get("/cursos", async (req, res) => {
  const respuesta = await prepararCurso()
  console.log(respuesta)
  res.send(respuesta)
})

app.put("/cursos/:id", async (req, res) => {
  const { id } = req.params
  const { nombre } = req.body
  const { nivelTecnico } = req.body
  const { fechaInicio } = req.body
  const { duracion } = req.body
  const respuesta = await editarCurso(id, nombre, nivelTecnico, fechaInicio, duracion)
  res.send(respuesta)
})

app.delete("/cursos/:id", async (req, res) => {
  const { id } = req.params
  const respuesta = await eliminarCurso(id)
  res.send(respuesta)
})
