function contarCaracteres(texto) {
    var cantidadCaracteres = texto.length;
    return cantidadCaracteres;
  }
  
  var textoIngresado = prompt("Ingrese un texto:");
  var cantidadCaracteres = contarCaracteres(textoIngresado);
  alert("El texto ingresado tiene " + cantidadCaracteres + " caracteres.");
  