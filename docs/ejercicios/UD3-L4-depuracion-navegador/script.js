// UD3-L4 · Depuración en el navegador
// Ejemplo motivacional: ¿Cómo puedes saber por qué no funciona un botón en una web?

const output = document.getElementById('output');

// Simulación de error y depuración
try {
  // Código con error intencionado
  let resultado = noExiste + 1;
} catch (error) {
  output.innerHTML = '<strong>Error detectado:</strong> ' + error.message + '<br>';
  output.innerHTML += 'Abre la consola del navegador (F12) para ver más detalles.';
}

console.log('Depuración: usa la consola, breakpoints y el inspector de elementos.');
