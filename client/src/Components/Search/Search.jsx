import { useEffect, useState } from "react";
import { getCountryName } from "../../Redux/Actions";
import { useDispatch } from "react-redux";



const Search = () =>{
    const dispatch = useDispatch()

    const [nombre, setNombre] = useState('')
    
    const handleChange = (event) =>{
        const {value} = event.target;
        setNombre(value)
    }
    useEffect(()=>{
        dispatch(getCountryName(nombre))
    }, [dispatch, nombre])

    return(
        <div>
             <label>Buscar pais</label>
            <input type="search" name="search" onChange={handleChange} />
        </div>
    )
}

export default Search;