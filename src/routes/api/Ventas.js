const express = require("express");
const router = express.Router();
const ventasController = require("../../controllers/ventasController");


//Método para listar comisiones

router.get("/listar_comisiones/:id_asesores",ventasController.listar_ventas);



module.exports = router;