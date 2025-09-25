// Ejemplo 07 - Tipos de datos en JavaScript
// Mostramos varios tipos de datos en consola y en la página

// Declaración de variables de diferentes tipos
const numero = 42; // Número
const texto = "Hola mundo"; // Cadena de texto
const booleano = true; // Booleano
const indefinido = undefined; // Indefinido
const nulo = null; // Nulo
const objeto = { nombre: "Juan", edad: 30 }; // Objeto
const arreglo = [1, 2, 3]; // Array

// Mostrar en consola
console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Indefinido:", indefinido);
console.log("Nulo:", nulo);
console.log("Objeto:", objeto);
console.log("Array:", arreglo);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>Tipos de datos:</strong><br>
  Número: ${numero}<br>
  Texto: ${texto}<br>
  Booleano: ${booleano}<br>
  Indefinido: ${indefinido}<br>
  Nulo: ${nulo}<br>
  Objeto: { nombre: "${objeto.nombre}", edad: ${objeto.edad} }<br>
  Array: [${arreglo.join(', ')}]
`;
document.body.appendChild(output);
