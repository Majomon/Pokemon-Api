/* Función para extraer los types del pokemon */

const getNamesByTypes = (pokemon) => {
  pokemon = pokemon.types.map((type) => type.dataValues.name);
  return pokemon;
};

module.exports = getNamesByTypes;
