// Ejemplo 13 - Estructura for en JavaScript
// Mostramos un bucle for simple

let texto = "";
for (let i = 1; i <= 5; i++) {
  texto += i + " ";
}

// Mostrar en consola
console.log("Números del 1 al 5:", texto);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>Bucle for:</strong><br>
  for (let i = 1; i <= 5; i++) { ... }<br>
  <strong>Resultado:</strong> ${texto}
`;
document.body.appendChild(output);
