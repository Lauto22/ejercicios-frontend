function obtenerNombreCompleto(nombre,apellido) {
    return nombre + " " + apellido;
}
function saludar(nombre) {
    return "Hola " + nombre + " ,que gusto volver a verte" ;
}
function gritar(str) {
    return "¡"+ str +"!";
}
function SaludarGritando(nombre,apellido) {
    const nombreCompleto = obtenerNombreCompleto(nombre,apellido)
    const saludo = saludar(nombreCompleto)
    const grito = gritar(saludo)
   console.log(grito)
}