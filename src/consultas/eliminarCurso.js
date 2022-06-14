const cliente = require("./cliente")

const eliminarCurso = async (id) => {
  const client = await cliente()
  try {
    await client.query("BEGIN")
    const consulta = {
      name: "eliminarCurso",
      text: `DELETE FROM cursos WHERE id = $1 RETURNING *`,
      values: [id],
    }
    await client.query("COMMIT")
    const result = await client.query(consulta)
    return result
  } catch (error) {
    await client.query("ROLLBACK")
    console.log(error.code)
    return error
  }
}

module.exports = eliminarCurso
