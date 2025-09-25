// UD2-L2 · Operadores y expresiones
// Ejemplo motivacional: ¿Cómo calcula una web el precio total de tu compra?

const output = document.getElementById('output');
let precio = 15;
let cantidad = 2;
let total = precio * cantidad;
output.innerHTML = `
  <strong>Operadores:</strong> +, -, *, /, %<br>
  <strong>Expresión:</strong> precio * cantidad = ${total}<br>
  <em>Ejemplo real:</em> El total de tu compra se calcula multiplicando el precio por la cantidad.
`;

console.log('Operadores y expresiones: suma, resta, multiplicación, división, módulo.');
