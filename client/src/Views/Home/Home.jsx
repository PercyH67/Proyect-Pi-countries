
import Cards from "../../Components/Cards/Cards";
import styles from "./Home.module.css"
import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { getCountries, filterCountry, orderCountry, orderPoblation, getActivities, filterActivity  } from "../../Redux/Actions";



const Home = () =>{

    const { filterContent, Activities } = useSelector(state => state)


    const dispatch = useDispatch()

    const handleFilter = (event) =>{
        const { value } = event.target;
        dispatch(filterCountry( value))
    }
  
    const handleOrder = (event) =>{
        const { value } = event.target;
        dispatch(orderCountry( value ))
    }
    const orderPobla = (event) =>{
        const { value } = event.target;
        dispatch(orderPoblation( value ))
    }
    const handleActivity = (event) =>{
        const { value } = event.target;
        dispatch(filterActivity( value ))
    }

    
    useEffect(() => {
        dispatch(getActivities())
        dispatch(getCountries())
    },[dispatch])

    return(
        <div>
            <div className={styles.container}>
                <div>
                    <span><b>Filtrar por continente: </b></span>
                    <select onChange={ handleFilter }  value={filterContent.continente}>
                        <option value="DEFAULT" disable="true">
                            --filtrar por continente--
                        </option>
                        <option key="1" value="Antarctica" >Antarctica</option>
                        <option key="2" value="South America" >South America</option>
                        <option key="3" value="Asia">Asia</option>
                        <option key="4" value="Africa" >Africa</option>
                        <option key="5" value="Europe" >Europe</option>
                        <option key="6" value="North America" >North America</option>
                        <option key="7" value="Oceania" >Oceania</option>
                    </select>   
                </div>
                <div>
                    <span><b>Ordenar Alfabeticamente: </b></span>
                    <select onChange={ handleOrder }>
                        <option value="DEFAULT" disable="true">
                            --Ordenar AZ-ZA--
                        </option>
                        <option value="From A to Z">From A to Z</option>
                        <option value="From Z to A">From Z to A</option>
                    </select>
                </div>
                <div>
                    <span><b>Ordenar Por Poblacion: </b></span>
                    <select onChange={ orderPobla }>
                        <option value="DEFAULT" disable="true">
                            --Ordenar poblacion--
                        </option>
                        <option value="Poblacion mayor">Poblacion mayor</option>
                        <option value="Poblacion menor">Poblacion menor</option>
                    </select>
                </div>
                <div>
                   <span><b>Filtrar por actividad: </b></span>
                   <select onChange={handleActivity} >
                        <option value="DEFAULT" disable="true">
                                --filtrar Actividad--
                            </option>
                        {Activities.map(option =>{
                           return <option key={option.nombre}  value={option.nombre} >{option.nombre}</option>
                        })}
                   </select>
                </div>
            </div>
            <Cards/>
        </div>
    )
}
export default Home;