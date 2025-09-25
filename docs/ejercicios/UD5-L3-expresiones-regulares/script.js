// UD5-L3 · Expresiones regulares
// Ejemplo motivacional: ¿Cómo se valida un número de teléfono o una contraseña?

const output = document.getElementById('output');

const telefono = '612345678';
const regex = /^6\d{8}$/;
output.innerHTML = `
  <strong>Teléfono:</strong> ${telefono}<br>
  <strong>¿Válido?</strong> ${regex.test(telefono) ? 'Sí' : 'No'}<br>
  <em>Ejemplo real:</em> Validar el formato de un teléfono antes de guardar el dato.
`;

console.log('Expresiones regulares: búsqueda, validación, patrones.');
