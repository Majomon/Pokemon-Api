const { Pokemon, Type } = require("../db");
const getID = require("../utils/getID.js");
const getNamesByTypes = require("../utils/getNamesByTypes");

const postPokemonController = async (newPoke) => {
  try {
    const poke = await Pokemon.create({
      name: newPoke.name,
      img: newPoke.img,
      hp: newPoke.hp,
      attack: newPoke.attack,
      defense: newPoke.defense,
      speed: newPoke.speed,
      height: newPoke.height,
      weight: newPoke.weight,
    });
    const arrID = await getID(newPoke.types); //Recibo un array de tipos y recibo un array de ids sacados de la tabla de tipos
    await poke.setTypes(arrID);

    let pokemons = await Pokemon.findOne({
      where: {
        id: poke.id,
      }, //busco el id
      include: Type,
    });
    pokemons = {
      ...pokemons.dataValues,
      types: getNamesByTypes(pokemons), // Obtengo el array de tipos
    };
    return pokemons;
  } catch (error) {
    throw new Error("Hubo al crear al Pokemón");
  }
};

module.exports = postPokemonController;
