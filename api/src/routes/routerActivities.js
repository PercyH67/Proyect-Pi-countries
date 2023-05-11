const {Router} = require("express")
const { createActivity } = require("../controllers/createActivity")
const routerActivities = Router()

routerActivities.post('/activities', async(req, res)=>{
    //  ESTA RUTA RECIBE TODOS LOS DATOS NECESARIOS PARA CREAR UNA ACTIVIDAD TURISTICA
    try {
        const { nombre, dificultad, duracion, temporada } = req.body;
        const newActivity = await createActivity(nombre, dificultad, duracion, temporada)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
})

routerActivities.get('/activities', (req, res)=>{
    // ESTA RUTA OBTIENE PUN OBJETO DE TODAS LAS ECTIVIDADES TURISTICAS
    res.send('ESTA RUTA OBTIENE UN OBJETO DE TODAS LAS ECTIVIDADES TURISTICAS')
})


module.exports = routerActivities;