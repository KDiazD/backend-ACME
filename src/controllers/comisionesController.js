
const comisionesModel = require("../models/comisionesModel")
const controller = {};

//Método para listar comisiones

controller.listar_comisiones = async (req, res) => {
    let comisiones = await comisionesModel.listar_comisiones();
    res.json(comisiones);
};

//Método para obtener comisiones

controller.obtener_comisiones = async (req, res) => {
    let comisiones = await comisionesModel.obtener_comisiones(req.params.id_comisiones);
    res.json(comisiones);
};



//Método para eliminar comisiones

controller.eliminar_comisiones = async(req,res) => {
    await comisionesModel.eliminar_comisiones(req.params.id_comisiones);
    res.status(200).json({ message: "Eliminado correctamente" });
};
module.exports = controller;