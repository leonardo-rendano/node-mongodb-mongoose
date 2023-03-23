const { clientRoutes } = require("./client")

module.exports = (app: any) => {
  clientRoutes(app)
}