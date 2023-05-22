import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountry } from "../../Redux/Actions";
import styles from "./Detail.module.css";


const Detail = ()=>{

    const dispatch = useDispatch()
    const {id} = useParams()
    const { Country } = useSelector(state => state)
    useEffect(()=>{
        dispatch(getCountry(id))
    },[dispatch, id])
    
    return(
        <div>
            <div className={styles.detail}>
               <div className={styles.container}>
                    <div>
                        <img src={Country.imagen} alt={Country.nombre} />
                    </div>
                    <h2 style={{ textAlign: "center", color:"red"}}>{Country.nombre}</h2>
                    <p><b>Id: </b> {Country.id}</p>
                    <p><b>Capital: </b> {Country.capital}</p>
                    <p><b>Continente: </b> {Country.continente}</p>
                    <p><b>Area: </b> {Country.area}</p>
                    <p><b>Poblacion: </b> {Country.poblacion}</p>
                    <p><b>Sub Region: </b> {Country.subRegion}</p>
                  
               </div>
            </div>
        </div>
    )
}

export default Detail;