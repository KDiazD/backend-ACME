
const comisionesModel = require("../models/comisionesModel")
const controller = {};

//Método para listar comisiones

controller.listar_comisiones = async (req, res) => {
    let comisiones = await comisionesModel.listar_comisiones();
    res.json(comisiones);
};

module.exports = controller;