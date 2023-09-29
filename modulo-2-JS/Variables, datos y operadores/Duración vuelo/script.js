function calcularDuracionVuelo() {
    // Solicitar al usuario los destinos y duraciones de las escalas
    const escala1 = prompt("Ingrese el primer destino de la escala:");
    const duracionEscala1 = parseFloat(prompt("Ingrese la duración de la primera escala en horas:"));
  
    const escala2 = prompt("Ingrese el segundo destino de la escala:");
    const duracionEscala2 = parseFloat(prompt("Ingrese la duración de la segunda escala en horas:"));
  
    const escala3 = prompt("Ingrese el tercer destino de la escala:");
    const duracionEscala3 = parseFloat(prompt("Ingrese la duración de la tercera escala en horas:"));
  
    // Calcular la duración total del vuelo
    const duracionTotal = duracionEscala1 + duracionEscala2 + duracionEscala3;
  
    // Mostrar las escalas y su duración
    alert("Escalas del vuelo:\n\n- " + escala1 + ": " + duracionEscala1.toFixed(2) + " horas\n- " + escala2 + ": " + duracionEscala2.toFixed(2) + " horas\n- " + escala3 + ": " + duracionEscala3.toFixed(2) + " horas\n\nDuración total del vuelo: " + duracionTotal.toFixed(2) + " horas");
  }
  
  // Ejecutar la función para calcular la duración del vuelo
  calcularDuracionVuelo();
  