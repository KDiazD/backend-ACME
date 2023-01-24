const controller = {};

controller.listar_ventas = async (req, res) => {
    
    res.json(ventas);
};

module.exports = controller;