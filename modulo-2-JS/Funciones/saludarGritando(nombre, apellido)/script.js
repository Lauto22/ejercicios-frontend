function obtenerNombreCompleto(nombre,apellido) {
    return nombre + " " + apellido;
}
function saludar(nombre) {
    return "Hola " + nombre + " ,que gusto volver a verte" ;
}
function gritar(str) {
    return "¡"+ str +"!";
}
function saludarGritando(nombre, apellido) {
    var nombreCompleto = obtenerNombreCompleto(nombre, apellido);
    var saludo = saludar(nombreCompleto);
    var saludoGritado = gritar(saludo);
    return saludoGritado;
    console.log(saludoGritado)
}