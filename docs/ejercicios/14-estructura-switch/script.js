// Ejemplo 14 - Estructura switch en JavaScript
// Mostramos un ejemplo de switch

const dia = 3;
let nombreDia = "";
switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  default:
    nombreDia = "Otro día";
}

// Mostrar en consola
console.log("Día:", dia, "- Nombre:", nombreDia);

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>switch:</strong><br>
  switch (dia) { ... }<br>
  <strong>Resultado:</strong> ${nombreDia}
`;
document.body.appendChild(output);
