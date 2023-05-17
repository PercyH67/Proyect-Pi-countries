import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_NAME } from "./Actions"



const initialState = {
    Countries: [],
    Country: [],
};


const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, Countries: action.payload}

        case GET_COUNTRY:
            return {...state, Country: action.payload}

        case GET_COUNTRY_NAME:
            return {...state, Countries: action.payload}
        default:
            return { ...state };
    }

}

export default rootReducer;