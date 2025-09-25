// UD1-L1 · Modelo de ejecución cliente/servidor
// Ejemplo motivacional: ¿Por qué algunas webs funcionan sin conexión y otras no?

// Simulación: código que se ejecuta en el cliente (navegador)
const output = document.getElementById('output');
output.innerHTML = `
  <strong>Cliente:</strong> Tu navegador ejecuta este código JS.<br>
  <strong>Servidor:</strong> El servidor envía el HTML, CSS y JS, pero no ejecuta este código.<br><br>
  <em>Ejemplo real:</em> Una calculadora online funciona en el cliente, pero una consulta bancaria requiere comunicación con el servidor.
`;

// Mostrar en consola para reforzar el aprendizaje
console.log('Este mensaje se ejecuta en el cliente (tu navegador)');
