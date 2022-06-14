const cliente = require("./cliente")

const prepararCurso = async () => {
  const client = await cliente()
  try {
    const consulta = {
      text: `SELECT * FROM cursos`,
    }
    const result = await client.query(consulta)
    console.log(result.rows)
    return result.rows
  } catch (error) {
    console.log(error.code)
    return error
  }
}

module.exports = prepararCurso
