function calcularMaximoHuespedes(habitaciones2, habitaciones3, habitaciones4) {
    var maximoHuespedes = (habitaciones2 * 2) + (habitaciones3 * 3) + (habitaciones4 * 4);
    return maximoHuespedes;
  }
  
  var habitaciones2Personas = parseInt(prompt("Ingrese la cantidad de habitaciones para 2 personas:"));
  var habitaciones3Personas = parseInt(prompt("Ingrese la cantidad de habitaciones para 3 personas:"));
  var habitaciones4Personas = parseInt(prompt("Ingrese la cantidad de habitaciones para 4 personas:"));
  
  var maximoHuespedes = calcularMaximoHuespedes(habitaciones2Personas, habitaciones3Personas, habitaciones4Personas);
  alert("El hotel puede albergar un máximo de " + maximoHuespedes + " huéspedes.");
  