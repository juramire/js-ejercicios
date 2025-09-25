// UD2-L3 · Control de flujo: sentencias y bucles
// Ejemplo motivacional: ¿Cómo decide una web si mostrar un mensaje de error o seguir adelante?

const output = document.getElementById('output');

// Ejemplo de condicional
let usuarioLogueado = false;
if (usuarioLogueado) {
  output.innerHTML = '¡Bienvenido!';
} else {
  output.innerHTML = 'Por favor, inicia sesión.';
}

// Ejemplo de bucle
output.innerHTML += '<br><br><strong>Bucle for:</strong><br>';
for (let i = 1; i <= 3; i++) {
  output.innerHTML += `Iteración ${i}<br>`;
}

console.log('Control de flujo: if, else, switch, for, while, do...while.');
