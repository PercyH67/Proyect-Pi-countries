import { useState } from "react";
import styles from "./Form.module.css"
import validate from "./validate";
import axios from "axios";
import { useSelector } from "react-redux";

const Form = ()=>{

 const { Countries } = useSelector(state => state)

 
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
    if(Form.nombre === "" || Form.duracion === "" || Form.dificultad === "" || Form.temporada === "") {
       return alert("Complete los campos por favor")
     }else{
         axios.post("http://localhost:3001/auth/activities", Form)
         .catch(error =>{
             if (error.response.status === 404) {
                alert("La actividad con ese nombre ya existe")
             }
         })   
     } 
    
    setForm({
        nombre:'',
        dificultad: 0,
        duracion: "",
        temporada: "",
        countries: ""
    })
 }
  
    return(
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                <h2>Crear actividad turistica</h2>
                    <div>
                        <label >Nombre: </label>
                        <input type="text" value={Form.nombre} onChange={handleChange} name="nombre" required />
                        <p className={styles.error}>
                            {Errors.nombre ? Errors.nombre : null}
                        </p>
                    </div>
                    <div>
                        <label >Dificultad: </label>
                        <input type="Number" value={Form.dificultad} onChange={handleChange} name="dificultad" required  />    
                    </div>
                    <p className={styles.error}>
                            {Errors.dificultad ? Errors.dificultad : null}
                        </p>
                    <div>
                        <label >Duracion: </label>
                        <input type="time" value={Form.duracion} onChange={handleChange} name="duracion" required />    
                    </div>
                    <p className={styles.error}>
                            {Errors.duracion ? Errors.duracion : null}
                        </p>
                    
                    <section name="temporada" value={Form.temporada}>
                        <input type="radio" required name="temporada" value="Primavera" onChange={handleChange} /> Primavera
                        <input type="radio" required name="temporada" value="Otoño" onChange={handleChange} /> Otoño
                        <input type="radio" required name="temporada" value="Invierno" onChange={handleChange}  /> Invierno
                        <input type="radio" required name="temporada" value="Verano" onChange={handleChange} /> Verano
                    </section>
                    <p className={styles.error}>
                            {Errors.temporada ? Errors.temporada : null}
                        </p>
                    <select className={styles.opciones} onChange={handleChange} name="countries" value={Form.countries}  >
                        {Countries.map(option =>{
                           return <option key={option.id}  value={option.id} >{option.nombre}</option>
                        })}
                    </select>  
                    <button >Crear</button>
                </div>
                <p></p>
            </form>
            
        </div>
    )
}

export default Form;