
import Search from "../Search/Search";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return(
        <div>
            <button>
                <Link to="/form">Formulario</Link>
            </button>
            <Search/>
        </div>
    )
}
export default NavBar;