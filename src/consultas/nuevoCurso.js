const cliente = require("./cliente")

const nuevoCurso = async (nombre, nivelTecnico, fechaInicio, duracion) => {
  const client = await cliente()
  try {
    const consulta = {
      text: `INSERT INTO cursos (nombre, nivel, fecha, duracion) VALUES ($1, $2, $3, $4)`,
      values: [nombre, nivelTecnico, fechaInicio, duracion],
    }
    const result = await client.query(consulta)
    return result.rows
  } catch (error) {
    console.log(error.code)
    return error
  }
}

module.exports = nuevoCurso 
