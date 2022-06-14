const cliente = require("./cliente")

const editarCurso = async (id, nombre, nivelTecnico, fechaInicio, duracion) => {
  const client = await cliente()
  try {
    const consulta = {
      text: `UPDATE cursos SET 
              nombre = $2,
              nivel = $3,
              fecha = $4,
              duracion = $5 WHERE id = $1 RETURNING *`,
      values: [id, nombre, nivelTecnico, fechaInicio, duracion],
    }
    const res = await client.query(consulta)
    return res.rows
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = editarCurso
