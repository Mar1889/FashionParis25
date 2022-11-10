const express = require("express")
const router = express.Router()
const productosController = require("../controllers/productos.controller");

router.post("/", productosController.create)
router.get("/", productosController.find)//obtiene todos los datos de DB
router.get("/:id", productosController.findOne)// Obtiene segun el Id
router.put("/:id", productosController.update)
router.delete("/:id", productosController.remove)

module.exports = router;
