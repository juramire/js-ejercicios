// UD6-L2 · DOM: creación y modificación
// Ejemplo motivacional: ¿Cómo se añade un nuevo producto a una lista sin recargar la página?

const output = document.getElementById('output');

const lista = document.createElement('ul');
const producto = document.createElement('li');
producto.textContent = 'Producto nuevo';
lista.appendChild(producto);
document.body.appendChild(lista);
output.innerHTML = `<strong>Producto añadido dinámicamente al DOM.</strong><br>`;

console.log('DOM: creación, modificación, appendChild, removeChild, etc.');
