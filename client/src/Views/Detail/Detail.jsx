import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountry } from "../../Redux/Actions";
import styles from "./Detail.module.css"


const Detail = ()=>{

    const dispatch = useDispatch()
    const {id} = useParams()
    const country = useSelector(state => state.Country)
    useEffect(()=>{
        dispatch(getCountry(id))
    },[dispatch, id])

    return(
        <div>
              <div className={styles.detail}>
               <div style={{width:"300px", border: "solid 2px red"}}>
                  <img style={{ width: "200px",}} src={country.imagen} alt={country.nombre} />
                  <h2 style={{ textAlign: "center", color:"red"}}>{country.nombre}</h2>
                  <p><b>Id: </b> {country.id}</p>
                  <p><b>Capital: </b> {country.capital}</p>
                  <p><b>Continente: </b> {country.continente}</p>
                  <p><b>Area: </b> {country.area}</p>
                  <p><b>Poblacion: </b> {country.poblacion}</p>
                  <p><b>Sub Region: </b> {country.subRegion}</p>
               </div>
            </div>
        </div>
    )
}

export default Detail;