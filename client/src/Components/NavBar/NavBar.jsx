
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from "../../assets/logo-country.png"


const NavBar = () =>{
    return(
        <div className={styles.container}>
            <img style={{width:"200px", height:"150px"}} src={logo} alt="logo" />
            <button>
                <Link to="/home">Inicio</Link>
            </button>
            <button>
                <Link to="/form">Crear Actividad</Link>
            </button>
            <Search/>
            <button>
                <Link to="/"> Cerrar sesión</Link>
            </button>
        </div>
    )
}
export default NavBar;