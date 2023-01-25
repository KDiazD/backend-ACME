const ventasModel = require("../models/ventasModel");
const controller = {};


//Método para listar ventas

controller.listar_ventas = async (req, res) => {
    let ventas = await ventasModel.listar_ventas();
    res.json(ventas);
};

//Método para obtener ventas

controller.obtener_ventas = async(req, res) =>{
    let obtener_ventas = await ventasModel.obtener_ventas(req.params.id_ventas);
    console.log(obtener_ventas)
    res.json(obtener_ventas);
};

//Método para agregar ventas

controller.agregar_ventas = async(req, res) =>{
    await ventasModel.agregar_ventas(req.body);
    res.status(200).json({ status: 'success', message: "Registrado correctamente" });
};

//Método para editar ventas

controller.editar_ventas = async (req, res) => {
    await ventasModel.editar_ventas(req.body, req.params.id_ventas);
    res.status(200).json({
        status: 'success',
        message: "Editado correctamente"
    });
};


//Método para eliminar ventas

controller.eliminar_ventas = async(req,res) => {
    await ventasModel.eliminar_ventas(req.params.id_ventas);
    res.status(200).json({ message: "Eliminado correctamente" });
  };

module.exports = controller;