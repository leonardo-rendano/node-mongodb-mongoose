const mongoose = require("mongoose");
const express =  require("express");

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://mydatabase:Libertya7x@mydatabase.dsojdik.mongodb.net/MyApp?retryWrites=true&w=majority")

const db = mongoose.connection; 

db.on("connected", () => {
  console.log("Banco de dados conectado com sucesso!")
})

db.on("error", (error: string) => {
  console.log("Não foi possível conectar ao banco", error)
})

require("./routes/client.routes")(app)

app.listen(3333, () => {
  console.log("SERVIDOR ONLINE NA PORTA 3333")
})