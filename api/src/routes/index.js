const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerCountry = require("./routerCountries")
const routerActivity = require("./routerActivities")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/auth", routerCountry)
router.use("/auth", routerActivity)


module.exports = router;
