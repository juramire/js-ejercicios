// UD4-L2 · Arrays y operaciones agregadas
// Ejemplo motivacional: ¿Cómo muestra una web una lista de productos o suma los importes del carrito?

const output = document.getElementById('output');

const productos = [10, 20, 30];
const total = productos.reduce((acc, precio) => acc + precio, 0);
output.innerHTML = `
  <strong>Array:</strong> [${productos.join(', ')}]<br>
  <strong>Total:</strong> ${total}<br>
  <em>Ejemplo real:</em> Sumar los importes del carrito de la compra.
`;

console.log('Arrays: creación, recorrido, operaciones como map, filter, reduce.');
