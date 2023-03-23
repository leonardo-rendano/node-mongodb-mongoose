const mongoose = require("mongoose")
const Schema = mongoose.Schema

export const clientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  }
})



module.exports = mongoose.model("Client", clientSchema)