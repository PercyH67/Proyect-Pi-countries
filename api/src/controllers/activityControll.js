const { Activity, Country } = require('../db')

// ESTE CONTROLADOR CREA LAS ACTIVIDADES Y ENVIA AL MODELO DE BDD

const createActivities = async( nombre, dificultad, duracion, temporada, countries ) => {
 const createActivity = await Activity.create({ nombre, dificultad, duracion, temporada })
 await createActivity.addCountries(countries)
 return createActivity
}

// ESTE CONTROLADOR TRAE TODOS LOS DATOS DE LA ACTIVIDAD DE LA BDD
const getAllActivities = async () => {
    const allActivity = await Activity.findAll({
        include:[
            {
                model: Country,
                attributes: ["id", "nombre", "imagen", "continente", "capital", "subRegion", "area", "poblacion"],
                through: { attributes: [] }
        
            }
        ]
    })
return allActivity
}

module.exports = { createActivities, getAllActivities };