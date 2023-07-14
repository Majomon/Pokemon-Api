const { Router } = require("express");
const routerPokemon = require("../routes/routerPokemon");
const routerType = require("../routes/routerType");
const { URL_BASE } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", async (req, res) => {
  const dataAPI = (await axios.get(`${URL_BASE}/1`)).data;
  res.status(200).json(dataAPI);
});

//* Defino los dos routers, pokemons y types
router.use("/pokemons", routerPokemon);

router.use("/types", routerType);

module.exports = router;
