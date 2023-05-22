
import { useEffect, useState } from "react";
import { getCountryName } from "../../Redux/Actions";
import { useDispatch } from "react-redux";
import styles from "./Search.module.css"



const Search = () =>{
    const dispatch = useDispatch()

    const [ nombre, setNombre ] = useState('')
    
    const handleChange = (event) =>{
        const { value } = event.target;
        setNombre(value)
    }
    useEffect(()=>{
        dispatch(getCountryName(nombre))
    }, [dispatch, nombre])

    return(
        <div className={styles.container}>
             <label>Buscar pais: </label>
            <input type="search" name="search" onChange={handleChange} />
        </div>
    )
}

export default Search;