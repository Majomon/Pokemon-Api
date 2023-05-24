const { Router } = require("express");
const getPokemon = require("../handlers/getPokemon");
const getPokemonId = require("../handlers/getPokemonId");
const getPokemonQuery = require("../handlers/getPokemonQuery");
const postPokemon= require("../handlers/postPokemon")

const pokemonRouter = Router();

// Peticiones tipo GET
pokemonRouter.get("/", getPokemon);

pokemonRouter.get("/name", getPokemonQuery);

pokemonRouter.get("/:id", getPokemonId);

// Petición tipo POST
pokemonRouter.post("/", postPokemon);

module.exports = pokemonRouter;
