// Ejemplo 12 - Estructuras if-else en JavaScript
// Mostramos un ejemplo de if-else

let nota = 7;
let resultado = "";
if (nota >= 5) {
  resultado = "Aprobado";
} else {
  resultado = "Suspenso";
}

// Mostrar en consola
console.log("Nota:", nota, "- Resultado:", resultado);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>if-else:</strong><br>
  let nota = 7;<br>
  if (nota >= 5) { ... }<br>
  <strong>Resultado:</strong> ${resultado}
`;
document.body.appendChild(output);
