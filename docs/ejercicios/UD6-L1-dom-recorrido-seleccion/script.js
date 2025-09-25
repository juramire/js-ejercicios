// UD6-L1 · DOM: recorrido y selección
// Ejemplo motivacional: ¿Cómo selecciona una web todos los botones para aplicarles un estilo?

const output = document.getElementById('output');

const botones = document.querySelectorAll('button');
output.innerHTML = `<strong>Botones encontrados:</strong> ${botones.length}<br>`;

console.log('DOM: recorrido, selección, querySelector, getElementById, etc.');
