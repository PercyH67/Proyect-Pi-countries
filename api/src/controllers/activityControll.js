const { Activity } = require('../db')

// ESTE CONTROLADOR CREA LAS ACTIVIDADES Y ENVIA AL MODELO DE BDD

const createActivities = async( nombre, dificultad, duracion, temporada ) => {
 return await Activity.create({ nombre, dificultad, duracion, temporada })
}

// ESTE CONTROLADOR TRAE TODOS LOS DATOS DE LA ACTIVIDAD DE LA BDD
const getAllActivities = async () => {
return await Activity.findAll()
}

module.exports = { createActivities, getAllActivities };