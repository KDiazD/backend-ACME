const asesoresModel = require("../models/asesoresModel");
const controller = {};

//Método para listar asesores

controller.listar_asesores = async (req, res) => {
    let asesores = await asesoresModel.listar_asesores();
    res.json(asesores);
};


//Método para agregar asesores

controller.agregar_asesores= async(req, res) => {
  await asesoresModel.agregar_asesores(req.body);
  console.log(req.body);
  res.status(200).json({ message: "Registrado correctamente" });
};

//Método para obtener asesor

controller.obtener_asesor = async (req, res) => {
  let asesores = await asesoresModel.obtener_asesor(req.params.id_asesor);
  res.json(asesores);
};

//Método para editar asesores

controller.editar_asesores = async(req, res) =>{
  await asesoresModel.editar_asesores(req.body, req.params.id_asesores);
  res.status(200).json({ message: "Editado correctamente"});
};

//Método para eliminar asesores

controller.eliminar_asesores = async(req,res) => {
  await asesoresModel.eliminar_asesores(req.params.id_asesores);
  res.status(200).json({ message: "Eliminado correctamente" });
};





  module.exports = controller;