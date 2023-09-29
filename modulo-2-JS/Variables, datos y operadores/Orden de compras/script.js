function calcularTotalCompra() {
    var precioProducto1 = 40;
    var precioProducto2 = 100;
    var precioProducto3 = 400;
  
    var cantidadProducto1 = parseInt(prompt("Ingrese la cantidad que desea comprar de chicles:"));
    var cantidadProducto2 = parseInt(prompt("Ingrese la cantidad que desea comprar de chupetines:"));
    var cantidadProducto3 = parseInt(prompt("Ingrese la cantidad que desea comprar de alfajores:"));
  
    var totalCompra = (precioProducto1 * cantidadProducto1) + (precioProducto2 * cantidadProducto2) + (precioProducto3 * cantidadProducto3);
  
    var cantidadCuotas = parseInt(prompt("En cuántas cuotas desea realizar el pago?"));
  
    var valorCuota = totalCompra / cantidadCuotas;
  
    alert("Detalle de la compra:\n\n" +
      "Cantidad de chicles: " + cantidadProducto1 + "\n" +
      "Cantidad de chupetines: " + cantidadProducto2 + "\n" +
      "Cantidad de alfajores: " + cantidadProducto3 + "\n\n" +
      "Valor total de la compra: $" + totalCompra.toFixed(2) + "\n" +
      "Cantidad de cuotas: " + cantidadCuotas + "\n" +
      "Valor de cada cuota: $" + valorCuota.toFixed(2));
  }
  
  calcularTotalCompra();
  