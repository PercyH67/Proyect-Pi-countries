import { useState } from "react";
import styles from "./Form.module.css"
import validate from "./validate";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = ()=>{

 const select = useSelector(state => state.Countries)
 

 const [Form, setForm] = useState({
    nombre: "",
    dificultad: 0,
    duracion: "",
    temporada: "",
    countries: ""
 })
 const [Errors, setErrors] = useState({
    nombre: "",
    dificultad: 0,
    duracion: "",
    temporada: "",
    countries: ""
 })

 const handleChange = (event) =>{
    const {name, value} = event.target;

    setForm({
        ...Form,
         [name]: value,
        })

    setErrors(
        validate(({
            ...Form,
            [name]:value
        }))
    )
 }


 const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("http://localhost:3001/auth/activities", Form)
 }
    return(
        <div>
            <h1> Esto es mi form</h1>
            <form action="" onSubmit={handleSubmit} className={styles.form}>
                <h2>Crear actividad turistica</h2>
                <div className={styles.inputs}>
                    <div>
                        <label htmlFor="">Nombre: </label>
                        <input type="text" value={Form.nombre} onChange={handleChange} name="nombre"/>
                        <p className={styles.error}>
                            {Errors.nombre ? Errors.nombre : null}
                        </p>
                    </div>
                    <div>
                        <label htmlFor="">Dificultad: </label>
                        <input type="Number" value={Form.dificultad} onChange={handleChange} name="dificultad"/>    
                    </div>
                    <p className={styles.error}>
                            {Errors.dificultad ? Errors.dificultad : null}
                        </p>
                    <div>
                        <label htmlFor="">Duracion: </label>
                        <input type="text" value={Form.duracion} onChange={handleChange} name="duracion"/>    
                    </div>
                    <p className={styles.error}>
                            {Errors.duracion ? Errors.duracion : null}
                        </p>
                    
                    <section name="temporada" value={Form.temporada}>
                        <input type="radio" name="temporada" value="Primavera" onChange={handleChange} /> Primavera
                        <input type="radio" name="temporada" value="Otoño" onChange={handleChange}/> Otoño
                        <input type="radio" name="temporada" value="Invierno" onChange={handleChange} /> Invierno
                        <input type="radio" name="temporada" value="Verano" onChange={handleChange} /> Verano
                    </section>
                    <p className={styles.error}>
                            {Errors.temporada ? Errors.temporada : null}
                        </p>
                    <select style={{width: "150px"}} onChange={handleChange} name="countries" value={Form.countries}  >
                        {select.map(option =>{
                           return <option key={option.id}  value={option.id} >{option.nombre}</option>
                        })}
                    </select>
                    

                    <button>Crear</button>
                </div>
            </form>
        </div>
    )
}

export default Form;