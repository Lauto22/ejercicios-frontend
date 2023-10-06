const puedeAvanzar = (color)=>{
    if(color == "verde"){
        return true
    }
    else if(color == "rojo" || color =="amarillo"){
    return false;
    } else {
        return "Error: color de semáforo invalido";
    }
};
console.log(puedeAvanzar("verde"))
