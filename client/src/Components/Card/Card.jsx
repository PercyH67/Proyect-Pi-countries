import { Link } from "react-router-dom";
import styles from "./Card.module.css"


const Card = ({ id, imagen, nombre, continente }) =>{

    return(
        <div className={styles.cardContainer}>
            <div>
              <img src={imagen} alt="" />
            </div> 
            <p><b>nombre: </b> {nombre}</p>
            <p><b>Continente: </b>{continente}</p>
            <div className={styles.boton}>  
                 <button><Link to={`/countries/${id}`} >ver mas</Link></button>
            </div>
            
        </div>
    )
}

export default Card;