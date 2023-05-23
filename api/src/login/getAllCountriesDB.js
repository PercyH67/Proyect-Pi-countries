
const axios = require("axios")
const { Country } = require("../db")


const getAllCountriesDB = async () =>{
    try {
        const api = (
            await axios.get("https://rest-countries.up.railway.app/v3/all")
         ).data 
         const countries = api?.map(country =>{
             return {
                 id: country.cca3,
                 nombre: country.name.common,
                 imagen: country.flags[0],
                 continente: country.continents[0],
                 capital: country.capital? country.capital[0] : 'Sin capital',
                 subRegion: country.subregion,
                 area: country.area,
                 poblacion: country.population,
             }
         })
          await Country.bulkCreate(countries)
          return countries
        
    } catch (error) {
        return error
    }

};
module.exports = getAllCountriesDB;

