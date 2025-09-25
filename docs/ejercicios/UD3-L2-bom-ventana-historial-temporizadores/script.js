// UD3-L2 · BOM: ventana, historial y temporizadores
// Ejemplo motivacional: ¿Cómo funcionan los mensajes emergentes o los temporizadores de una web?

const output = document.getElementById('output');

// Ejemplo de ventana y temporizador
output.innerHTML = '<strong>Ventana:</strong> Ancho: ' + window.innerWidth + 'px<br>';
output.innerHTML += '<strong>Historial:</strong> Entradas: ' + history.length + '<br>';

output.innerHTML += '<strong>Temporizador:</strong> Espera 2 segundos...<br>';
setTimeout(() => {
  output.innerHTML += '¡Han pasado 2 segundos!<br>';
}, 2000);

console.log('BOM: window, history, setTimeout, setInterval, alert, etc.');
