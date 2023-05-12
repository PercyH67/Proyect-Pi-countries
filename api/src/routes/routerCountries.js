
const {Router} = require('express')
const routerCountries = Router()
const {getAllData, getCountryById, getCountriesQuery} = require("../controllers/countriesControll")



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
 const { activities } = req.body;
 try {
    const country = await getCountryById(id, activities)
    res.status(201).json(country)
 } catch (error) {
    res.status(400).json({error: error.message})
 }
})


routerCountries.get('/country', async (req, res)=>{
    // ESTA RUTA TREA LA INFORMACION DE LAS CIUDADES POR QUERY
    try {
        const {nombre} = req.query
        const countriesName = await getCountriesQuery(nombre)
        res.status(201).json(countriesName)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = routerCountries;

//SET CLIENT_ENCODING TO 'UTF8';
//SELECT * FROM "countries" LIMIT ALL;