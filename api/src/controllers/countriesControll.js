
const { Country } = require("../db")

const getAllData = async() =>{
    const allData = await Country.findAll()
    return allData
 }

 const getCountryById = async(id)=>{
 const data = await Country.findByPk(id)
 return data
 }
 module.exports = {getAllData, getCountryById};