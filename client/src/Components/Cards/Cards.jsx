import Card from "../Card/Card"
import styles from "./Cards.module.css"
import { useSelector } from "react-redux"
import Paginate from "../Paginate/Paginate"


const Cards = () =>{

const { Countries, numPaginate, filterContent, Activity } = useSelector(state => state)


let desde = (numPaginate - 1) * 10;
let hasta = numPaginate * 10;
let num = !Countries.length ? Countries : filterContent && !filterContent.length? Countries: filterContent;
let cantPaginate = Math.floor(num.length /10 );


let viewCountries = Activity.length?  Activity : (filterContent.length === 0 ? Countries.slice(desde, hasta): filterContent.slice(desde, hasta) )


    return(
        <div>
            <div className={styles.containerCards}>
                {viewCountries?.map(country =>{
                    return  <Card
                        id = {country.id}
                        key={country.nombre}
                        imagen= {country.imagen}
                        nombre = {country.nombre}
                        continente = {country.continente}
                        activities = {country.Activities}
                    />
                })}
            </div>
            { Activity.length? null: <Paginate  cantPaginate={ cantPaginate } />}
        </div>
    )
}
export default Cards;