const { Client } = require("pg")

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "cursos",
  password: "alejandra",
  port: 5432,
})
client.connect()
const cliente = async () => {
    try {
        return client
    } catch (error) {
        console.log(error.code)
        throw error
    }
}

module.exports = cliente