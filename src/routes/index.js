const { Router } = require("express");
const routerPokemon = require("../routes/routerPokemon");
const routerType = require("../routes/routerType");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//* Defino los dos routers, pokemons y types
router.use("/pokemons", routerPokemon);

router.use("/types", routerType);

module.exports = router;
