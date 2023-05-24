/* const { Pokemon, Types } = require("../db"); */
const axios = require("axios");
const { URL_BASE } = process.env;
const getPokemonData = require("../utils/getPokemonData");

const getPokemonApi = async () => {
  try {
    // Peticion de los pokemons a la Api
    const dataAPI = (await axios.get(`${URL_BASE}?limit=151`)).data;
    // Si la peticion sale mal da un error
    if (!dataAPI) {
      throw new Error("Error al hacer la petición a la API");
    }
    const pokemonResult = dataAPI.results;
    // Espero a la resolucion de la promesa de cada pokemon
    const data = await Promise.all(
      pokemonResult.map((pokemon) => axios.get(pokemon.url))
    );
    // Mapeo cada pokemon por la info que necesito
    const arrPokemons = data.map((poke) => {
      return getPokemonData(poke);
    });
    return arrPokemons;
  } catch (error) {
    throw new Error("Error al obtener los datos de la API");
  }
};

module.exports = getPokemonApi;
