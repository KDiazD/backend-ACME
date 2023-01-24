const express = require("express");
const router = express.Router();
const comisionesController = require("../../controllers/comisionesController");


//Método para listar comisiones

router.get("/listar_comisiones/:id_asesores",comisionesController.listar_comisiones);



module.exports = router;