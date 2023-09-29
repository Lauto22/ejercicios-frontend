function verificarMultiplo() {
    // Solicitar al usuario ingresar dos números
    const numero1 = parseInt(prompt("Ingrese el primer número:"));
    const numero2 = parseInt(prompt("Ingrese el segundo número:"));
  
    // Verificar si el primer valor es múltiplo del segundo
    if (numero1 % numero2 === 0) {
      alert(numero1 + " es múltiplo de " + numero2);
    } else {
      alert(numero1 + " no es múltiplo de " + numero2);
    }
  }
  
  // Ejecutar la función para verificar si el primer valor es múltiplo del segundo
  verificarMultiplo();
  