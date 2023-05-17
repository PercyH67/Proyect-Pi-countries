import { GET_COUNTRIES, GET_COUNTRY } from "./Actions"



const initialState = {
    Countries: [],
    Country: []
};


const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, Countries: action.payload}

        case GET_COUNTRY:
            return {...state, Country: action.payload}
        default:
            return { ...state };
    }

}

export default rootReducer;