const getPokemonQueryController = require("../controllers/getPokemonQueryController");

const getPokemonQuery = async (req, res) => {
  const { name } = req.query;
  try {
    const pokemonApi = await getPokemonQueryController(name);
    res.status(200).json(pokemonApi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonQuery;
