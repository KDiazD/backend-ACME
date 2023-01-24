const pool = require("../database");
const model = {};


//Método para listar asesores

model.listar_asesores = async () => {
    const sql = `SELECT asesores.id, asesores.nombre AS Nombre_asesor, ne.nombre AS Nivel_de_Experiencia 
    FROM asesores AS asesores, nivel_experiencia AS ne 
    WHERE asesores.nivel_experiencia_id = ne.id AND estado != 2`;
    const asesores = await pool.query(sql);
    return asesores;
  };


module.exports = model;
