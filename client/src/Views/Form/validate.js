export default function validate ({nombre, duracion, dificultad, temporada}){
    const Errors ={};

    if (!nombre) {
        Errors.nombre = "ingrese el nombre de tu actividad";
    }
    if (!duracion) {
        Errors.duracion = "ingrese el tiempo de duracion";
    }
    if (!dificultad) {
        Errors.dificultad = "ingrese una dificultad que sea menor que 5";
    }
    if (!temporada) {
        Errors.temporada = "elija una temporada para tu actividad";
    }
    
    return Errors;
}