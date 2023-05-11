const { Activity } = require('../db')

const createActivity = async( nombre, dificultad, duracion, temporada )=>{
  await Activity.create({ nombre, dificultad, duracion, temporada })
}



module.exports = {createActivity };