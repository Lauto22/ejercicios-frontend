function calcularTiempoRecorrido() {
    // Definir velocidades para diferentes medios de transporte
    const velocidadPie = 5; // km/hora
    const velocidadBici = 10; // km/hora
    const velocidadAuto = 60; // km/hora
  
    // Solicitar al usuario la distancia del recorrido
    const distanciaRecorrido = parseFloat(prompt("Ingrese la distancia del recorrido en kilómetros:"));
  
    // Calcular el tiempo estimado para cada medio de transporte
    const tiempoPie = distanciaRecorrido / velocidadPie;
    const tiempoBici = distanciaRecorrido / velocidadBici;
    const tiempoAuto = distanciaRecorrido / velocidadAuto;
  
    // Mostrar el tiempo estimado para cada medio de transporte
    alert("Tiempo estimado para completar el recorrido:\n\nA pie: " + tiempoPie.toFixed(2) + " horas\nEn bicicleta: " + tiempoBici.toFixed(2) + " horas\nEn auto: " + tiempoAuto.toFixed(2) + " horas");
  }
  
  // Ejecutar la función para calcular el tiempo de recorrido
  calcularTiempoRecorrido();
  