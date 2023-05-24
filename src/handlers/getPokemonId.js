const getPokemonIdController = require("../controllers/getPokemonIdController");

const getPokemonId = async (req, res) => {
  const { id } = req.params;
  // Con esto la funcion va a buscar o en la BDD o en la API
  const source= isNaN(id)?"bdd":"api"
  try {
    const pokemonApi = await getPokemonIdController(id,source);
    res.status(200).json(pokemonApi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getPokemonId;
