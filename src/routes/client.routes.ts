const { getClients } = require("../controller/client.controller")

exports.clientRoutes = app => {
  app.get("/client", getClients)
}

