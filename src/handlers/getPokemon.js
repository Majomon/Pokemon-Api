const getPokemonApi = require("../controllers/getPokemonApi");
const getPokemonaBdd= require("../controllers/getPokemonBdd")
const getPokemon = async (req, res) => {
  try {
    const apiPokemon = await getPokemonApi();
    const bddPokemon= await getPokemonaBdd()
    res.status(200).json([ ...bddPokemon,...apiPokemon]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemon;
