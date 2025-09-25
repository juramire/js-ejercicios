// UD4-L1 · Funciones en JavaScript
// Ejemplo motivacional: ¿Cómo calcula una web el total de una compra usando una función?

const output = document.getElementById('output');

// Definición de una función
function calcularTotal(precio, cantidad) {
  return precio * cantidad;
}

// Uso de la función
let total = calcularTotal(12, 4);
output.innerHTML = `
  <strong>Función:</strong> calcularTotal(precio, cantidad)<br>
  <strong>Ejemplo:</strong> calcularTotal(12, 4) = ${total}<br>
  <em>Ejemplo real:</em> Una web de compras usa funciones para calcular totales, descuentos, etc.
`;

console.log('Funciones: declaración, llamada, parámetros, retorno.');
