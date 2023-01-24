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

//Método para agregar asesores

model.agregar_asesores = async(asesores) =>{
  const sql = `INSERT INTO asesores SET ?`;
  await pool.query(sql, asesores);
};

//Método para editar asesores

model.editar_asesores = async(asesores, id_asesores) => {
  const sql = `UPDATE asesores SET ? WHERE id = ${id_asesores}`;
  await pool.query(sql, asesores)
};

//Método para eliminar asesores

model.eliminar_asesores = async(id_asesores) =>{
  const sql = `UPDATE asesores SET estado =  2  WHERE id = ${id_asesores}`;
  return await pool.query(sql);
};

  
  module.exports = model;