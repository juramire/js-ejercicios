// Ejemplo 08 - Asignaciones en JavaScript
// Mostramos ejemplos de asignación en consola y en la página

// Asignación simple
let x = 5;
// Asignación compuesta
x += 3; // x = x + 3
x *= 2; // x = x * 2

// Mostrar en consola
console.log("Valor final de x:", x);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>Asignaciones:</strong><br>
  let x = 5;<br>
  x += 3; // x = x + 3<br>
  x *= 2; // x = x * 2<br>
  <strong>Valor final de x:</strong> ${x}
`;
document.body.appendChild(output);
