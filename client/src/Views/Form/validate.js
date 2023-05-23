export default function validate ({nombre, duracion, dificultad, temporada}){
    const Errors ={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


    if(!nombre.trim()){
        Errors.nombre = "*Nombre requerido";
    }else if(!regexName.test(nombre.trim())){
        Errors.nombre = "*El campo de nombre solo acepta letras y espacios en blanco";
    };
    if(!dificultad){
        Errors.dificultad = "*Dificultad requerido";
    }
    else if (dificultad < 1 || dificultad > 5) {
        
        Errors.dificultad = "*La dificultad debe estar entre 1 y 5 dificultades";
    }
    if(!duracion){
        Errors.duracion = "*Duracion requerido";
    }else if(duracion < 1 || duracion > 24){
        Errors.duracion = "*La duración debe ser entre 1:00 y 24:00 horas";
    };
    if(!temporada){
        Errors.temporada = "*Temporada requerido";
    }  
    return Errors;
}