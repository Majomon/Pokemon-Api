/* Función para desestructurar la data de todos los pokemones en la web de inicio */

const getPokemonData = (poke) => {
  return {
    id: poke.data.id,
    name: poke.data.name,
    height: poke.data.height,
    weight: poke.data.weight,
    attack: poke.data.stats[1].base_stat,
    img: poke.data.sprites.other["official-artwork"].front_default,
    types: poke.data.types.map((pokemon) => pokemon.type.name),
  };
};

module.exports = getPokemonData;
