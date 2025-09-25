// Ejemplo 17 - Errores comunes en JavaScript
// Mostramos y explicamos los errores más habituales de principiantes

// 1. Olvidar declarar variables (crea variables globales sin querer)
// x = 10; // No recomendado, debería ser: let x = 10;

// 2. Confundir = (asignación) con == o === (comparación)
let a = 5;
if (a = 3) { // Error común: esto asigna, no compara
  console.log('¡Esto siempre se ejecuta!');
}

// 3. Comparaciones no estrictas (==) que dan resultados inesperados
console.log('0 == false:', 0 == false); // true
console.log('"" == 0:', "" == 0); // true
console.log('null == undefined:', null == undefined); // true

// 4. Acceder a variables antes de declararlas (let/const)
// console.log(y); // ReferenceError
// let y = 2;

// 5. Olvidar el break en un switch
let color = 'rojo';
let mensaje = '';
switch (color) {
  case 'rojo':
    mensaje += 'Rojo ';
  case 'azul':
    mensaje += 'Azul ';
    break;
  default:
    mensaje += 'Otro';
}
console.log('Switch sin break:', mensaje); // Rojo Azul

// 6. Errores de tipado en nombres de variables o funciones
// myFuction(); // ReferenceError: myFuction is not defined

// 7. No usar paréntesis en llamadas a funciones
function saluda() {
  return '¡Hola!';
}
// console.log(saluda); // Muestra la función, no el resultado
console.log(saluda()); // Correcto

// 8. No esperar a que el DOM esté cargado
// document.getElementById('output').textContent = 'Hola'; // Puede fallar si el DOM no está listo

document.addEventListener('DOMContentLoaded', function() {
  // Mostrar ejemplos y explicaciones en la página
  const output = document.getElementById('output');
  output.innerHTML = `
    <strong>Errores comunes en JavaScript:</strong><br><br>
    <ul>
      <li><b>Olvidar declarar variables:</b> x = 10; // Debe ser let x = 10;</li>
      <li><b>Confundir = con == o ===:</b> if (a = 3) {...} // Asigna, no compara</li>
      <li><b>Comparaciones no estrictas:</b> 0 == false // true</li>
      <li><b>Acceder a variables antes de declararlas:</b> console.log(y); let y = 2; // ReferenceError</li>
      <li><b>Olvidar break en switch:</b> case 'rojo': ... // Puede ejecutar más de un caso</li>
      <li><b>Errores de tipado:</b> myFuction(); // ReferenceError</li>
      <li><b>No usar paréntesis en funciones:</b> console.log(saluda); // Muestra la función, no el resultado</li>
      <li><b>No esperar al DOM:</b> document.getElementById('output').textContent = 'Hola'; // Puede fallar</li>
    </ul>
    <em>Consulta la consola para ver ejemplos y resultados.</em>
  `;
});
