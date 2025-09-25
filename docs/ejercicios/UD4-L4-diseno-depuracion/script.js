// UD4-L4 · Diseño y depuración de programas
// Ejemplo motivacional: ¿Cómo se detectan y corrigen errores en una aplicación web compleja?

const output = document.getElementById('output');

// Simulación de diseño y depuración
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(2, 3);
output.innerHTML = `
  <strong>Diseño:</strong> función sumar(a, b)<br>
  <strong>Depuración:</strong> resultado = ${resultado}<br>
  <em>Ejemplo real:</em> Probar y depurar funciones ayuda a evitar errores en aplicaciones reales.
`;

console.log('Diseño y depuración: planificación, pruebas, corrección de errores.');
