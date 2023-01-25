const pool = require("../database");
const model = {};

model.listar_comisiones = async () => {
    const sql = `SELECT * 
    FROM comisiones AS com, asesores AS asesores WHERE com.id_asesores = asesores.id AND com.estado != 2`;
    const comisiones = await pool.query(sql);
    return comisiones;
  };
module.exports = model;