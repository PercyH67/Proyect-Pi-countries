
const axios = require("axios")
const { Country } = require("../db")


const getAllCountriesDB = async () =>{
    const api = (
       await axios.get("https://restcountries.com/v3.1/all")
    ).data 
    const countries = api?.map(country =>{
        return {
            id: country.cca3,
            nombre: country.name.common,
            imagen: country.flags.svg,
            continente: country.continents[0],
            capital: country.capital? country.capital[0] : 'Sin capital',
            subRegion: country.subregion,
            area: country.area,
            poblacion: country.population,
        }
    })
     await Country.bulkCreate(countries)
     return countries
};
module.exports = getAllCountriesDB;

