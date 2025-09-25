// UD6-L4 · DOM: compatibilidad y capas
// Ejemplo motivacional: ¿Cómo se asegura una web de que funciona igual en Chrome y Firefox?

const output = document.getElementById('output');

// Compatibilidad y capas
output.innerHTML = `<strong>Navegador:</strong> ${navigator.userAgent}<br>`;
output.innerHTML += `<strong>Compatibilidad:</strong> El DOM funciona en todos los navegadores modernos.<br>`;
output.innerHTML += `<strong>Capas:</strong> Puedes superponer elementos con CSS (z-index).<br>`;

console.log('DOM: compatibilidad, capas, z-index, userAgent.');
