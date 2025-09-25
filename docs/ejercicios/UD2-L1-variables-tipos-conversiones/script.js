// UD2-L1 · Variables, tipos y conversiones (2)
// Ejemplo motivacional: ¿Por qué a veces un número y un texto parecen iguales pero no lo son?

const output = document.getElementById('output');
let numero = 10;
let texto = '10';
output.innerHTML = `
  <strong>Comparación:</strong> numero = 10 (number), texto = '10' (string)<br>
  numero == texto → ${numero == texto} (comparación débil)<br>
  numero === texto → ${numero === texto} (comparación estricta)<br>
  <em>Ejemplo real:</em> Si en un formulario el usuario escribe '10', es texto, no número. ¡Cuidado con las conversiones!
`;

console.log('Conversiones de tipos: parseInt, parseFloat, String(), etc.');
