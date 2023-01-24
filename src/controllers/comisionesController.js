const controller = {};

controller.listar_comisiones = async (req, res) => {
    
    res.json(comisiones);
};

module.exports = controller;