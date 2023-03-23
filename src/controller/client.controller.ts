const mongoose = require("mongoose");
const Client = mongoose.model("Client")
import { request, Request, Response } from "express";

exports.getClients = async (request: Request, response: Response) => {
  try {
    const client = await Client.find({})
    response.status(200).send(client)
  } catch (error) {
    response.status(400).send(error)
  }
}

exports.createClient = async (request: Request, response: Response) => {
  try {
    const client = new Client(request.body)
    await client.save()
    response.status(200).json({ message: "Cliente criado com sucesso" })
  } catch (error) {
    response.send(400).send(error)
  }
}

exports.getClientById = async (request: Request, response: Response) => {
  try {
    const client = await Client.findOne({ _id: request.params.id })
    response.status(200).send(client)
  } catch (error) {
    response.status(400).send(error)
  }
}

exports.updateClient = async (request: Request, response: Response) => {
  try {
    await Client.findByIdAndUpdate(request.params.id, {
      $set: request.body
    })
    response.status(200).json({ message: "Cliente atualizado com sucesso!" })
  } catch (error) {
    response.status(400).send(error)
  }
}

exports.deleteClient = async (request: Request, response: Response) => {
  try {
    await Client.findByIdAndDelete(request.params.id)
    response.status(200).json({ message: "Cliente removido com sucesso!" })
  } catch (error) {
    response.status(400).send(error)
  }
}
