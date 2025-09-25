// Ejemplo 09 - Operadores en JavaScript
// Mostramos operadores aritméticos, lógicos y de comparación

const a = 10, b = 3;
// Operadores aritméticos
const suma = a + b;
const resta = a - b;
const producto = a * b;
const division = a / b;
const modulo = a % b;

// Operadores de comparación
const igual = a == b;
const mayor = a > b;

// Operadores lógicos
const and = (a > 5) && (b < 5);
const or = (a < 5) || (b < 5);

// Mostrar en consola
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Producto:", producto);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("¿a == b?", igual);
console.log("¿a > b?", mayor);
console.log("AND:", and);
console.log("OR:", or);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>Operadores:</strong><br>
  Suma: ${suma}<br>
  Resta: ${resta}<br>
  Producto: ${producto}<br>
  División: ${division}<br>
  Módulo: ${modulo}<br>
  ¿a == b?: ${igual}<br>
  ¿a > b?: ${mayor}<br>
  AND: ${and}<br>
  OR: ${or}
`;
document.body.appendChild(output);
