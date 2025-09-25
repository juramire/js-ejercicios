// UD7-L2 · JSON y actualización del DOM
// Ejemplo motivacional: ¿Cómo muestra una web los datos de un usuario recibidos en JSON?

const output = document.getElementById('output');

// Ejemplo de JSON y actualización del DOM
const datos = '{"nombre":"Juan","edad":30}';
const usuario = JSON.parse(datos);
output.innerHTML = `<strong>Usuario:</strong> ${usuario.nombre}, ${usuario.edad} años<br>`;

console.log('JSON: parse, stringify, actualización del DOM.');
