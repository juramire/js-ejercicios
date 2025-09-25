// UD3-L1 · Objetos nativos de JavaScript
// Ejemplo motivacional: ¿Cómo se manipulan fechas, textos o números en una web?

const output = document.getElementById('output');

// Ejemplo de uso de objetos nativos
const fecha = new Date();
const texto = 'Hola mundo';
const numero = 123.456;

output.innerHTML = `
  <strong>Date:</strong> ${fecha.toLocaleString()}<br>
  <strong>String:</strong> ${texto.toUpperCase()}<br>
  <strong>Number:</strong> ${numero.toFixed(2)}<br>
  <em>Ejemplo real:</em> Mostrar la fecha actual, convertir texto a mayúsculas o formatear un precio.
`;

console.log('Objetos nativos: Date, String, Number, Array, Math, etc.');
