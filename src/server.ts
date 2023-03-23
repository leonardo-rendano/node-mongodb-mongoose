const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

app.listen(3333, () => {
  console.log("SERVIDOR ONLINE NA PORTA 3333")
})