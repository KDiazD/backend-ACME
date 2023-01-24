const express = require("express");
const router = express.Router();
const asesoresController = require("../../controllers/asesoresController");


//Método para listar asesores

router.get("/listar_asesores", asesoresController.listar_asesores);

//Método para agregar asesores

router.post("/agregar_asesores", asesoresController.agregar_asesores);


//Método para obtener asesor

router.get("/obtener_asesor/:id_asesor", asesoresController.obtener_asesor);

//Método para editar asesores

router.put("/editar_asesores/:id_asesores", asesoresController.editar_asesores);

//Método para eliminar asesores

router.delete("/eliminar_asesores/:id_asesores", asesoresController.eliminar_asesores);

module.exports = router;



