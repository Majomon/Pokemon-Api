const axios = require("axios");
const { Type } = require("../db");

const getTypeController = async () => {
  try {
    const typePokemon = (await axios.get("https://pokeapi.co/api/v2/type"))
      .data;
    const infoTypes = typePokemon.results;

    // Creo el registro de cada Tipo en la BDD
    infoTypes.forEach((type) => {
      Type.findOrCreate({
        where: {
          name: type.name,
        },
      });
    });

    return infoTypes;
  } catch (error) {
    throw new Error("Error al pedir los types");
  }
};

module.exports = getTypeController;
