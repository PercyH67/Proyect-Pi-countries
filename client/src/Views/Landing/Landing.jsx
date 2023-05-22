import { Link } from "react-router-dom";
// import ImgLanding from "../../assets/content.jpg"
import styles from "./Landing.module.css"


const Landing = ()=>{
    return(
        <div className={styles.content}>
            <div className={styles.title}>
                <h1> Bienvenidos a mi proyecto</h1>
                <h3>ciudades para todos</h3>
            </div>
            <div className={styles.ingresar}> 
                <button>
                    <Link to="/home"> Acceso </Link>
                </button>
            </div>
        </div>
    )
}
export default Landing;