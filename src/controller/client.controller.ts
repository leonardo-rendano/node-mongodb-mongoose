const mongoose = require("mongoose");
const Client = mongoose.model("Client")
import { Request, Response } from "express";

exports.getClients = async (request: Request, response: Response) => {
  try {
    const client = await Client.find({})
    response.status(200).send(client)
  } catch (error) {
    response.status(400).send(error)
  }
}
