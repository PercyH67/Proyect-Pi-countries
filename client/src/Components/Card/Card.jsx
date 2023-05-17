import { Link } from "react-router-dom";
import styles from "./Card.module.css"


const Card = ({ id, imagen, nombre, continente }) =>{
    return(
        <div className={styles.cardContainer}> 
            <img src={imagen} alt="" />
            <p> <b>nombre: </b> {nombre}</p>
            <p><b>Continente: </b>{continente}</p>
            <button><Link to={`/countries/${id}`} >ver mas</Link></button>
        </div>
    )
}

export default Card;