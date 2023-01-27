const express = require("express");
const router = express.Router();
const comisionesController = require("../../controllers/comisionesController");


//Método para listar comisiones

router.get("/listar_comisiones",comisionesController.listar_comisiones);

//Método para obtener comisiones por id 

router.get("/obtener_comisiones/:id_comisiones",comisionesController.obtener_comisiones);


//Método para eliminar comisiones

router.delete("/eliminar_comisiones/:id_comisiones", comisionesController.eliminar_comisiones);




module.exports = router;