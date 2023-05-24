// Petición a la Api y BDD
const getPokemonApi = require("../controllers/getPokemonApi");
const getPokemonBdd = require("../controllers/getPokemonBdd");

const getPokemonDataQuery = require("../utils/getPokemonDataQuery");

const getPokemonQueryController = async (namePokemon) => {
  try {
    if (!namePokemon) {
      //obtenemos la data desde la base de datos como un array
      const pokemonDb = await getPokemonBdd();
      //obtenemos la data desde el api como un array
      const pokemonApi = await getPokemonApi();
      //las juntamos en un solo array y enviamos la respuesta
      return [...pokemonDb, ...pokemonApi];
    } else {
      const getPokemonQuery = await getPokemonDataQuery(namePokemon);
      return getPokemonQuery;
    }
  } catch (error) {
    throw new Error("Hubo un error al pedir un pokemón por Query");
  }
};

module.exports = getPokemonQueryController;
