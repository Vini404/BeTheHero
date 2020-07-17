const express = require ("express")

const OngController = require("./controller/OngController")
const IncidentController = require("./controller/IncidentController")
const profileController = require("./controller/ProfileController")
const SessionController = require("./controller/SessionController")

const routes = express.Router()

routes.post("/sessions", SessionController.create)

routes.get("/ongs", OngController.index)
routes.post("/ongs",OngController.create)

routes.get("/profile",profileController.index)

routes.post("/incidents",IncidentController.create)
routes.get("/incidents", IncidentController.index)

routes.delete("/incidents/:id", IncidentController.delete)

    
module.exports = routes