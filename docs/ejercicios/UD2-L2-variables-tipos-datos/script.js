// UD2-L2 · Variables y tipos de datos
// Ejemplo motivacional: ¿Cómo almacena una web tu nombre o el número de productos en el carrito?

const output = document.getElementById('output');
let nombre = 'Juan';
let productos = 3;
output.innerHTML = `
  <strong>Variables:</strong> nombre = '${nombre}', productos = ${productos}<br>
  <strong>Tipos:</strong> string (texto), number (número)<br>
  <em>Ejemplo real:</em> Tu nombre se guarda como texto y el carrito como número.
`;

console.log('Variables y tipos de datos: string, number, boolean, etc.');
