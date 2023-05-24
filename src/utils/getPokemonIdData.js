/* Función para devolver la data del pokemon desde la api, necesaria para la ruta de detalles */

const getPokemonIdData = (poke) => {
  return {
    id: poke.id,
    name: poke.name,
    // Generation-v y black-white lo pongo de esta manera porque sino no me toma el guion medio
    /*     img: poke.sprites.versions["generation-v"]["black-white"].animated
      .front_default, */
    img: poke.sprites.other["official-artwork"].front_default,
    hp: poke.stats[0].base_stat,
    attack: poke.stats[1].base_stat,
    defense: poke.stats[2].base_stat,
    speed: poke.stats[5].base_stat,
    height: poke.height,
    weight: poke.weight,
    types: poke.types.map((pokemon) => pokemon.type.name),
  };
};

module.exports = getPokemonIdData;
