const {Router} = require("express")
const { createActivities, getAllActivities } = require("../controllers/activityControll")
const routerActivities = Router()

routerActivities.post('/activities', async(req, res)=>{
    //  ESTA RUTA RECIBE TODOS LOS DATOS NECESARIOS PARA CREAR UNA ACTIVIDAD TURISTICA
    try {
        const { nombre, dificultad, duracion, temporada } = req.body;
        const newActivity = await createActivities(nombre, dificultad, duracion, temporada)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    
})

routerActivities.get('/activities', async(req, res)=>{
    // ESTA RUTA OBTIENE UN OBJETO DE TODAS LAS ECTIVIDADES TURISTICAS
    try {
        const allActivities = await getAllActivities()
        res.status(201).json(allActivities)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


module.exports = routerActivities;