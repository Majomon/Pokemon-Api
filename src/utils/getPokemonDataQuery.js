const axios = require("axios");
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");

// Para mapear
const getPokemonDataBdd = require("../utils/getPokemonDataBdd");
const getPokemonIdData = require("../utils/getPokemonIdData");
const getNamesByTypes = require("../utils/getNamesByTypes");

const getPokemonDataQuery = async (namePokemon) => {
  const nameToLower = namePokemon.trim().toLowerCase();

  // Primero busco en la base de datos
  let pokemonBdd = await Pokemon.findOne({
    where: { name: nameToLower },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  if (pokemonBdd) {
    // Si encontró el Pokémon en la base de datos, lo mapea y transforma
    const pokemonData = {
      ...pokemonBdd.dataValues,
      types: getNamesByTypes(pokemonBdd),
    };

    // Retorna la información utilizando la función getPokemonDataBdd
    return getPokemonDataBdd(pokemonData);
  }

  // Si no lo encuentra en la base de datos, lo busca en la API
  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameToLower}`)
    .catch((error) => {
      throw new Error(`El pokemon: ${nameToLower} no existe`);
    });

  const pokemonData = getPokemonIdData(response.data);
  return pokemonData;
};

module.exports = getPokemonDataQuery;
