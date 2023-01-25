const express = require("express");
const router = express.Router();
const ventasController = require("../../controllers/ventasController");


//Método para listar ventas

router.get("/listar_ventas",ventasController.listar_ventas);

//Método para obtener ventas

router.get("/obtener_ventas/:id_ventas", ventasController.obtener_ventas);

//Método para agregar ventas

router.post("/agregar_ventas", ventasController.agregar_ventas);

//Método para editar ventas

router.put("/editar_ventas/:id_ventas", ventasController.editar_ventas);

//Método para eliminar ventas

router.delete("/eliminar_ventas/:id_ventas", ventasController.eliminar_ventas);





module.exports = router;