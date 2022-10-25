const express = require("express")
const router = express.Router()
const clientesController = require("../controllers/clientes.controller");

router.post("/", clientesController.create)
router.get("/", clientesController.find)//obtiene todos los datos de DB
router.get("/:id", clientesController.findOne)// Obtiene segun el Id

module.exports = router
