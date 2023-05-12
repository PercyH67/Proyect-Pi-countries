
const { Op } = require("sequelize")
const { Country, Activity } = require("../db")
 // ES EL CONTROLADOR QUE TRAE TODOS LOS DATOS AÑADIENDO SU ACTIVIDAD
const getAllData = async() =>{
    const allData = await Country.findAll({
        include:{
            model: Activity
        }
    })
    return allData
 }
 // ESTE ES EL CONTROLADOR QUE AÑADE ACTIVIDADES A CADA CUIDAD BUSCANDO POR SU ID
 const getCountryById = async (id, activities)=>{
 const data = await Country.findByPk(id)
 await data.addActivities(activities)
 return data
 }
// ESTE ES EL CONTROLADOR QUE BUSCA POR SU NOMBRE Y TREA UN OBJETO CON SU ACTIVIDAD AÑADIDA
 const getCountriesQuery = (nombre)=>{
    const dataName = Country.findAll({
        where: {nombre: {[Op.iLike]:`%${nombre}%`} },
        include:[
            {
                model: Activity,
                attributes: ["nombre", "dificultad", "duracion", "temporada"],
                through: { attributes: [] }
            }
        ]
        
    })

    return dataName;
 }
 module.exports = {getAllData, getCountryById, getCountriesQuery};