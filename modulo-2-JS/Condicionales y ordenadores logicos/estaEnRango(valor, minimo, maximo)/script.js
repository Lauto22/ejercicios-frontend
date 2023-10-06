const estaEnRango = (valor, min, max) =>{
    if (valor >=min && valor <=max){
        return true
    } 
    else {
        return false
    }
}
console.log(estaEnRango(3,1,10))