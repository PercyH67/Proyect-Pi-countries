
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
            <h1>Este es mi home</h1>
            <Cards />

        </div>
    )
}
export default Home;