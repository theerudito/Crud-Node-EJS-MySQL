const mySQL = require("mysql")

const conexion = mySQL.createConnection({
  hots: "localhost",
  user:  "root",
  password: "erudito",
  database: "eruditoBD"
})

conexion.connect((error) => {
  if (error) {
    console.log("El Error de la coneccion es:" + error);
    return
  } 
  console.log("Conectado a la Base De Datos MySQL")
})

module.exports = conexion