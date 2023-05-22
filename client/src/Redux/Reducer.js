import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_NAME, PREV_PAGINATE, NEX_PAGINATE, HANDLE_NUMBER, FILTER_CONTINENT, ORDER_COUNTRIES, ORDER_POBLATION, GET_ACTIVITIES, FILTER_ACTIVITY, RESET} from "./Actions"



const initialState = {
    Countries: [],
    Country: [],
    numPaginate: 1,
    filterContent: [],
    Activities: [],
    Activity: []
};


const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state, 
                Countries: action.payload
            }

        case GET_COUNTRY:
            return {
                ...state, 
                Country: action.payload
            }

        case GET_COUNTRY_NAME:
            return {
                ...state, 
                Countries: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                Activities: action.payload
            }
        case FILTER_ACTIVITY:
            let activity = state.Activities.filter((nombre) => nombre.nombre === action.payload)
            let filtroActivity = activity.map(ele => ele.Countries[0])
                        
            return {
                ...state,
                Activity: filtroActivity

            }
        case HANDLE_NUMBER:
            return {
                ...state,
                numPaginate: action.payload
            }
        case NEX_PAGINATE:
            return {
                ...state,
                numPaginate: state.numPaginate +1
            }
        case PREV_PAGINATE:
            return {
                ...state,
                numPaginate: state.numPaginate -1
            }

            case FILTER_CONTINENT:
                let newFilter = state.Countries.filter((element) => element.continente === action.payload)
            
                return {
                    ...state, 
                    filterContent: newFilter
                }

            case ORDER_COUNTRIES:
                  const nombres =  state.Countries.sort((a, b) =>{
                    return "From A to Z" === action.payload? a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase()):state.Countries || "From Z to A" === action.payload?b.nombre.toLowerCase().localeCompare(a.nombre.toLowerCase()):state.Countries

                  })
                return{
                    ...state,
                    Countries: nombres
                }
                case ORDER_POBLATION:
                    const poblation = state.Countries.sort((a, b) =>{
                        return "Poblacion mayor" === action.payload? b.poblacion - a.poblacion: state.Countries || "Poblacion menor" === action.payload? a.poblacion - b.poblacion : state.Countries
                    })
                    return {
                        ...state, 
                        Countries: poblation
                    }
                case RESET:
                    return {
                        ...state,
                        Activity:[...state.Countries ]
                    }
        default:
            return { ...state };
    }

}

export default rootReducer;