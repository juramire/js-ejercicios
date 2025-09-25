// Ejemplo 15 - Otras estructuras en JavaScript
// Mostramos un ejemplo de while

let contador = 0;
let resultado = "";
while (contador < 3) {
  resultado += `Iteración ${contador + 1} <br>`;
  contador++;
}

// Mostrar en consola
console.log("While ejecutado 3 veces");

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>while:</strong><br>
  while (contador < 3) { ... }<br>
  <strong>Resultado:</strong><br>${resultado}
`;
document.body.appendChild(output);
