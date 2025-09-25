// UD5-L2 · Formularios: validación y envío
// Ejemplo motivacional: ¿Cómo se comprueba que un email es válido antes de enviar un formulario?

const output = document.getElementById('output');

// Ejemplo de validación simple
function validarEmail(email) {
  return email.includes('@');
}

const email = 'usuario@email.com';
output.innerHTML = `
  <strong>Email:</strong> ${email}<br>
  <strong>¿Válido?</strong> ${validarEmail(email) ? 'Sí' : 'No'}<br>
  <em>Ejemplo real:</em> Antes de enviar un formulario, se valida el email del usuario.
`;

console.log('Validación y envío de formularios: eventos, comprobaciones, feedback.');
