const express = require("express");
const router = express.Router();
const ventasController = require("../../controllers/ventasController");


//Método para listar ventas

router.get("/listar_ventas/:id_asesores",ventasController.listar_ventas);



module.exports = router;