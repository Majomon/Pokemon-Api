/* Función para devolver la data del pokemon desde la api, necesaria para la ruta de detalles */

const getPokemonIdDataBdd = (poke) => {
  return {
    id: poke.id,
    name: poke.name,
    // Generation-v y black-white lo pongo de esta manera porque sino no me toma el guion medio
    img: poke.img,
    hp: poke.hp,
    attack: poke.attack,
    defense: poke.defense,
    speed: poke.speed,
    height: poke.height,
    weight: poke.weight,
    types: poke.types,
  };
};

module.exports = getPokemonIdDataBdd;
