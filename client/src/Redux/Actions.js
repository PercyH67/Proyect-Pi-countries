import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_NAME = "GET_COUNTRY_NAME";
export const PREV_PAGINATE = "PREV_PAGINATE";
export const NEX_PAGINATE = "NEX_PAGINATE";
export const HANDLE_NUMBER = "HANDLE_NUMBER";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const ORDER_COUNTRIES = "ORDER_COUNTRIES";
export const ORDER_POBLATION = "ORDER_POBLATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";

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
        dispatch({type: GET_COUNTRY_NAME, payload: countryName})
    }
}



// las acciones para el paginado


export const prevPaginate = () =>{
    return {
        type: PREV_PAGINATE
    }
}
export const nexPaginate = () =>{
    return {
        type: NEX_PAGINATE
    }
}
export const handleNumber = (num) =>{
    return {
        type: HANDLE_NUMBER,
        payload: num
    }
}

// las acciones para el filtrado y ordenamiento

export const filterCountry = (continente) =>{
    return{
        type: FILTER_CONTINENT,
        payload: continente
    }
}

export const orderCountry = (nombre) =>{
    return {
        type: ORDER_COUNTRIES,
        payload: nombre
    }
}

export const orderPoblation = (nombre) =>{
    return {
        type: ORDER_POBLATION,
        payload: nombre
    }
}

export const getActivities = () =>{
    return async function (dispatch){
        const apiData  = await axios.get("http://localhost:3001/auth/activities/")
        const activities = apiData.data
        dispatch({type: GET_ACTIVITIES, payload: activities})
    }

}
export const filterActivity = (nombre) =>{
    return {
        type: FILTER_ACTIVITY,
        payload: nombre
    }
}


