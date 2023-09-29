function convertirSegundos(segundos) {
    var horas = Math.floor(segundos / 3600);
    var minutos = Math.floor((segundos % 3600) / 60);
    var segundosRestantes = segundos % 60;
  
    var resultado = "";
    if (horas > 0) {
      resultado += horas + " hora";
      if (horas > 1) {
        resultado += "s";
      }
      resultado += " ";
    }
    if (minutos > 0) {
      resultado += minutos + " minuto";
      if (minutos > 1) {
        resultado += "s";
      }
      resultado += " ";
    }
    if (segundosRestantes > 0) {
      resultado += segundosRestantes + " segundo";
      if (segundosRestantes > 1) {
        resultado += "s";
      }
    }
  
    return resultado;
  }
  
  var cantidadSegundos = parseInt(prompt("Ingrese una cantidad en segundos:"));
  var conversion = convertirSegundos(cantidadSegundos);
  alert(conversion);
  