let numero = prompt("Por favor, ingresa un número:");
let porcentaje = prompt("Por favor, ingresa el porcentaje que deseas obtener:");

let resultado = (numero * (porcentaje / 100)).toFixed(2);

alert(`El ${porcentaje}% de ${numero} es ${resultado}.`);