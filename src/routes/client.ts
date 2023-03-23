const { getClients, createClient, getClientById } = require("../controller/client.controller")

type ClientRoutes = {
  post(arg0: string, createClient: any): unknown
  get: (arg0: string, arg1: any) => void 
}

exports.clientRoutes = (app: ClientRoutes) => {
  app.get("/client", getClients)
  app.post("/client", createClient)
  app.get("/client/:id", getClientById)
}

