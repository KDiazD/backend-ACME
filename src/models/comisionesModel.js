const pool = require("../database");
const model = {};

//Método para listar comisiones

model.listar_comisiones = async () => {
    const sql = `SELECT * 
    FROM comisiones AS com, asesores AS asesores WHERE com.id_asesores = asesores.id AND com.estado != 2`;
    const comisiones = await pool.query(sql);
    return comisiones;
};

//Método para obtener comisiones

  model.obtener_comisiones = async(id_ventas) => {
    const sql = `SELECT asesores.nombre, comisiones.comision, comisiones.fecha, comisiones.id 
    FROM comisiones AS comisiones, asesores AS asesores 
    WHERE comisiones.id_asesores = asesores.id AND comisiones.id = ${id_comisiones}`;
    const obtener_comisiones = await pool.query(sql, id_comisiones);
    return obtener_comisiones;
};

//Método eliminar comisiones

model.eliminar_comisiones = async(id_comisiones) =>{
    const sql = `UPDATE comisiones SET estado =  2  WHERE id = ${id_comisiones}`;
    return await pool.query(sql);
};


module.exports = model;