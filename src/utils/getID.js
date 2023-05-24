/******** Función para obtener los id de los types *********/

const { Type } = require("../db");

const getID = async (data) => {
  let types = [];
  for (let i = 0; i < data.length; i++) {
    types.push(
      await Type.findOne({
        where: { name: data[i] }, // En la tabla types busco los tipos de pokemon por id, y regreso solo sus ids en un array
        attributes: ["id"], // Saco el atributo id
      })
    );
  }
  return types;
};

module.exports = getID;
