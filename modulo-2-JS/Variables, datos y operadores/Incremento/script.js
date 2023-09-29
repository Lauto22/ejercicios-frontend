function mostrarIncrementos() {
    // Solicitar al usuario el número de partida y la cantidad a incrementar
    const numeroPartida = parseInt(prompt("Ingrese un número de partida:"));
    const incremento = parseInt(prompt("Ingrese una cantidad a incrementar:"));
  
    let total = numeroPartida;
  
    // Mostrar cinco mensajes consecutivos con el número del mensaje y el total incrementado hasta el momento
    for (let i = 1; i <= 5; i++) {
      total += incremento;
      alert("Incremento " + i + ") Total: " + total);
    }
  }
  
  // Ejecutar la función para mostrar los incrementos
  mostrarIncrementos();
  