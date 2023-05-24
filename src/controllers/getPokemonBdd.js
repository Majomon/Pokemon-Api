const { Pokemon, Type } = require("../db");
const getNamesByTypes = require("../utils/getNamesByTypes.js");
const getPokemonDataBdd = require("../utils/getPokemonDataBdd");

const getPokemonBDD = async () => {
  let arrPokemonsDb = [];
  // Me traigo todos los pokemon de la BDD incluyendo tu tipo desde el modelo Type
  arrPokemonsDb = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      // No incluye los atributos  adicionales de la tabla de unión entre "Pokemon" y "Type".
      through: {
        attributes: [],
      },
    },
  });

  if (arrPokemonsDb) {
    // Mapea y transforma los Pokémon obtenidos
    arrPokemonsDb = arrPokemonsDb.map((poke) => {
      return {
        ...poke.dataValues,
        types: getNamesByTypes(poke),
      };
    });

    // Filtra y retorna la información utilizando la función getPokemonData
    const arrPokemons = arrPokemonsDb.map((poke) => {
      return getPokemonDataBdd(poke);
    });

    return arrPokemons;
  } else {
    throw new Error("Error al hacer la petición a la BDD");
  }
};

module.exports = getPokemonBDD;
