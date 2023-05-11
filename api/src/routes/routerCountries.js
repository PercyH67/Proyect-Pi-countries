
const {Router} = require('express')
const routerCountries = Router()
const {getAllData, getCountryById} = require("../controllers/countriesControll")



routerCountries.get('/countries', async (req, res)=>{
    // ESTA RUTA TRAE TODA LA INFORMACIONES DE CIUDADES 
    try {
        const countryData = await getAllData()
        res.status(200).json(countryData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

routerCountries.get('/countries/:id', async(req, res)=>{
 // ESTA RUTA OBTIENE LOS DETALLES DE UN OBJETO POR SU ID 
 const {id} = req.params;
 try {
    const country = await getCountryById(id)
    res.status(201).json(country)
 } catch (error) {
    res.status(400).json({error: error.message})
 }
})


routerCountries.get('/countries', (req, res)=>{
    const {name} = req.query
    // ESTA RUTA TREA LA INFORMACION DE LAS CIUDADES POR QUERY
    res.send('ESTA RUTA OBTIENE LOS DETALLES DE UN OBJETO POR QUERY' + name)
})


module.exports = routerCountries;

//SET CLIENT_ENCODING TO 'UTF8';
//SELECT * FROM "countries" LIMIT ALL;