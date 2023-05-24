/* Función para desestructurar la data de todos los pokemones en la web de inicio */

const getPokemonDataBdd = (poke) => {
  return {
    id: poke.id,
    name: poke.name,
    height: poke.height,
    weight: poke.weight,
    attack:poke.attack,
    img: poke.img,
    types: poke.types,
    createdInDb: poke.createdInDb,
  };
};

module.exports = getPokemonDataBdd;
