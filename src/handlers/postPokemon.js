const postPokemonController = require("../controllers/postPokemonController");

const postPokemon = async (req, res) => {
  try {
    // Sacando name, img y type, si no paso alguno de los otros valores se le asignara por default 
    const { name, img, hp=3, attack=3, defense=3, speed=3, height=10, weight=10, types } =
      req.body;
    const newPokemon = await postPokemonController({
      name:name.toLowerCase(),
      img,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postPokemon;
