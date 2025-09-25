// Ejemplo 11 - Sentencias en JavaScript
// Mostramos ejemplos de sentencias simples

let mensaje = "";
// Sentencia de declaración
let edad = 20;
// Sentencia condicional
if (edad >= 18) {
  mensaje = "Eres mayor de edad";
} else {
  mensaje = "Eres menor de edad";
}

// Mostrar en consola
console.log(mensaje);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>Sentencias:</strong><br>
  let edad = 20;<br>
  if (edad >= 18) { ... }<br>
  <strong>Resultado:</strong> ${mensaje}
`;
document.body.appendChild(output);
