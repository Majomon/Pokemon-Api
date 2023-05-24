const axios = require("axios");
const { Pokemon, Type } = require("../db");
/* Función para mapear los types y los datos que necesito de los pokemons */
const getNamesByTypes = require("../utils/getNamesByTypes");
const getPokemonIdData = require("../utils/getPokemonIdData");

const isUUID = (value) => {
  // Expresión regular para verificar el formato UUID
  const uuidRegex =
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;

  return uuidRegex.test(value);
};

const pokemonId = async (id, source) => {
  if (source === "api") {
    try {
      const pokemonId = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      ).data;
      return getPokemonIdData(pokemonId);
    } catch (error) {
      throw new Error(`No existe en la API un Pokémon con id: ${id}`);
    }
  } else {
    // Buscando al pokemon en la BDD
    if (!isUUID(id)) {
      throw new Error(
        "No ingresaste un formato valido de UUID para buscar en la BDD"
      );
    } else {
      try {
        let pokemonDB = await Pokemon.findOne({
          // Por ID
          where: { id },
          // Incluyendo los types asociados al ID del pokemon pero me trae todos los datos de la tabla Types
          include: Type,
        });
        pokemonDB = {
          ...pokemonDB.dataValues,
          // Filtro los types
          types: getNamesByTypes(pokemonDB),
        };
        return pokemonDB;
      } catch (error) {
        throw new Error(`No existe en la BDD un pokemon de ID: ${id}`);
      }
    }
  }
};

module.exports = pokemonId;
