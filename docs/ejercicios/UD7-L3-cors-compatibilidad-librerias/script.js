// UD7-L3 · CORS, compatibilidad y librerías
// Ejemplo motivacional: ¿Por qué a veces una web no puede acceder a datos de otro servidor?

const output = document.getElementById('output');

// Ejemplo de CORS y compatibilidad
output.innerHTML = `<strong>CORS:</strong> Controla el acceso entre servidores.<br>`;
output.innerHTML += `<strong>Compatibilidad:</strong> Las librerías ayudan a gestionar diferencias entre navegadores.<br>`;
output.innerHTML += `<strong>Ejemplo real:</strong> Una web puede usar una librería para acceder a una API externa respetando CORS.<br>`;

console.log('CORS, compatibilidad, librerías externas.');
