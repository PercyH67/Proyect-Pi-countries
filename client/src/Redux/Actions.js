import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";

export const getCountries = () =>{
    return async function (dispatch){
        const apiData  = await axios.get("http://localhost:3001/auth/countries")
        const countries = apiData.data
        
        dispatch({type: GET_COUNTRIES, payload: countries})
    }
}

export const getCountry = (id) =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/auth/countries/${id}`)
        const country = apiData.data;
        dispatch({type: GET_COUNTRY, payload: country})
    }
    
}

export const getCountryName = (nombre) =>{
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/auth/country/?nombre=${nombre}`)
        const countryName = apiData.data;
        console.log(countryName);
        dispatch({type: GET_COUNTRY_NAME, payload: countryName})
    }
}