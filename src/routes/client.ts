const { getClients, createClient, getClientById, updateClient, deleteClient } = require("../controller/client.controller")

type ClientRoutes = {
  delete: any
  put: any
  post(arg0: string, createClient: any): unknown
  get: (arg0: string, arg1: any) => void 
}

exports.clientRoutes = (app: ClientRoutes) => {
  app.get("/client", getClients)
  app.post("/client", createClient)
  app.get("/client/:id", getClientById)
  app.put("/client/:id", updateClient)
  app.delete("/client/:id", deleteClient)
}

