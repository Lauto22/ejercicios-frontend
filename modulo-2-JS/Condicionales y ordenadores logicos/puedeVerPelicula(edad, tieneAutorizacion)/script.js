let edad =10;
let tieneAutorizacion = false;

const puedeVerPelicula = () => {
    if (edad >= 15 || tieneAutorizacion == true){
        return "Tiene autorizacion"
    }
    else {
       return "No tiene autorizacion"
    }
};
console.log(puedeVerPelicula())