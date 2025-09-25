// UD2-L3 · Variables, tipos y conversiones
// Ejemplo motivacional: ¿Por qué a veces un número y un texto parecen iguales pero no lo son?

const output = document.getElementById('output');
let numero = 5;
let texto = '5';
output.innerHTML = `
  <strong>Comparación:</strong> numero = 5 (number), texto = '5' (string)<br>
  numero == texto → ${numero == texto} (comparación débil)<br>
  numero === texto → ${numero === texto} (comparación estricta)<br>
  <em>Ejemplo real:</em> Si en un formulario el usuario escribe '5', es texto, no número. ¡Cuidado con las conversiones!
`;

console.log('Conversiones de tipos: parseInt, parseFloat, String(), etc.');
