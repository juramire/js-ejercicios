// UD2-L4 · Operadores y expresiones
// Ejemplo motivacional: ¿Cómo calcula una web el precio total de tu compra?

const output = document.getElementById('output');
let precio = 20;
let cantidad = 3;
let total = precio * cantidad;
output.innerHTML = `
  <strong>Operadores:</strong> +, -, *, /, %<br>
  <strong>Expresión:</strong> precio * cantidad = ${total}<br>
  <em>Ejemplo real:</em> El total de tu compra se calcula multiplicando el precio por la cantidad.
`;

console.log('Operadores y expresiones: suma, resta, multiplicación, división, módulo.');
