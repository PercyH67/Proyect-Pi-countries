
import Cards from "../../Components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/Actions";




const Home = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])


    return(
        <div>
            <div style={{display:"flex"}}>
                <div>
                    <p><b>Filtrar</b></p>
                    <input type="text" />
                </div>
                <div>
                    <p><b>Ordenar</b></p>
                    <input type="text" />
                </div>
            </div>
            <Cards />
        </div>
    )
}
export default Home;