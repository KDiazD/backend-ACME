const pool = require("../database");
const model = {};


//Método para listar ventas

model.listar_ventas = async () => {
    const sql = `SELECT *, ven.id as id 
    FROM ventas AS ven, asesores AS asesores WHERE ven.id_asesor = asesores.id AND ven.estado != 2`;
    const ventas = await pool.query(sql);
    return ventas;
  };

//Método para obtener ventas por id

model.obtener_ventas = async(id_ventas) => {
  const sql = `SELECT * 
  FROM asesores AS asesores, ventas AS ven WHERE ven.id_asesor = asesores.id AND ven.id = ${id_ventas}`;
  const obtener_ventas = await pool.query(sql, id_ventas);
  return obtener_ventas;
};

//Método para agregar ventas

model.agregar_ventas = async(ventas) => {
  const sql = `INSERT INTO ventas SET ?`;
  await pool.query(sql, ventas);

};

//Método para editar ventas

model.editar_ventas = async(ventas, id_ventas) => {
  const sql = `UPDATE ventas SET ? WHERE id = ${id_ventas}`;
  await pool.query(sql, ventas);
};

//Método para eliminar ventas

model.eliminar_ventas = async(id_ventas) =>{
  const sql = `UPDATE ventas SET estado =  2  WHERE id = ${id_ventas}`;
  return await pool.query(sql);
};

module.exports = model;
