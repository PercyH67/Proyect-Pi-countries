import Card from "../Card/Card"
import styles from "./Cards.module.css"
import { useSelector } from "react-redux"


const Cards = () =>{

const Countries = useSelector(state => state.Countries)

    return(
        <div className={styles.containerCards}>
            {Countries.map(country =>{
                return <Card
                    id = {country.id}
                    key={country.nombre}
                    imagen= {country.imagen}
                    nombre = {country.nombre}
                    continente = {country.continente}
                />
            })}

        </div>
    )
}
export default Cards;