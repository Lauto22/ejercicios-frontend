function calcularPagoServicios() {
    var dineroDisponible = parseFloat(prompt("Ingrese la cantidad de dinero disponible:"));
    var servicios = [];
    var serviciosRestantes = 3;
  
    while (serviciosRestantes > 0) {
      var nombreServicio = prompt("Ingrese el nombre del servicio:");
      var montoPago = parseFloat(prompt("Ingrese el monto a pagar por el servicio:"));
  
      servicios.push({ nombre: nombreServicio, monto: montoPago });
      serviciosRestantes--;
  
      dineroDisponible -= montoPago;
  
      alert("Quedan " + serviciosRestantes + " servicios por ingresar.");
      alert("Dinero disponible: $" + dineroDisponible.toFixed(2));
    }
  
    var listaServicios = "";
    var totalPagado = 0;
  
    for (var i = 0; i < servicios.length; i++) {
      listaServicios += servicios[i].nombre + ": $" + servicios[i].monto.toFixed(2) + "\n";
      totalPagado += servicios[i].monto;
    }
  
    alert("Lista de servicios a pagar:\n" + listaServicios);
    alert("Total pagado: $" + totalPagado.toFixed(2));
    alert("Dinero disponible restante: $" + dineroDisponible.toFixed(2));
  }
  
  calcularPagoServicios();
  