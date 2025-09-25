// Ejemplo 16 - Particularidades de JavaScript
// Este script muestra detalles importantes y trampas comunes para principiantes

// 1. Cuidado: el JS puede ejecutarse antes de que el HTML esté cargado
// Si intentamos acceder a un elemento antes de que exista, dará error:
// document.getElementById('btn-evento').textContent = '¡Esto puede fallar!';
// Por eso, es mejor ejecutar el código tras el evento DOMContentLoaded o al final del body

document.addEventListener('DOMContentLoaded', function() {
  // 2. Diferencia entre var y let
  // var tiene ámbito de función, let de bloque
  var x = 1;
  if (true) {
    var x = 2; // ¡Sobrescribe la variable x!
    let y = 3; // y solo existe dentro de este bloque
  }
  // console.log(y); // Error: y no está definida

  // 3. Comparaciones estrictas y no estrictas
  let a = '5';
  let b = 5;
  let igualEstricto = (a === b); // false
  let igualNoEstricto = (a == b); // true

  // 4. Formas de registrar un evento
  const btn = document.getElementById('btn-evento');
  // Forma clásica
  btn.onclick = function() {
    mostrar('¡Evento click con onclick!');
  };
  // Forma moderna
  btn.addEventListener('dblclick', function() {
    mostrar('¡Evento doble click con addEventListener!');
  });

  // 5. Hoisting: var se eleva, let/const no
  hoisted(); // Funciona
  function hoisted() {
    console.log('Esta función se puede usar antes de declararla');
  }
  // noHoisted(); // Error si se descomenta
  // let noHoisted = function() { ... }

  // 6. typeof NaN y null
  let nanType = typeof NaN; // 'number'
  let nullType = typeof null; // 'object' (curiosidad histórica)

  // Mostrar resultados en consola
  console.log('var x tras if:', x); // 2
  console.log('Comparación estricta (===):', igualEstricto);
  console.log('Comparación no estricta (==):', igualNoEstricto);
  console.log('typeof NaN:', nanType);
  console.log('typeof null:', nullType);

  // Mostrar resultados en la página
  mostrar(`
    <strong>var x tras if:</strong> ${x}<br>
    <strong>Comparación estricta (===):</strong> ${igualEstricto}<br>
    <strong>Comparación no estricta (==):</strong> ${igualNoEstricto}<br>
    <strong>typeof NaN:</strong> ${nanType}<br>
    <strong>typeof null:</strong> ${nullType}<br>
    <em>Haz click y doble click en el botón para ver eventos.</em>
  `);

  // Función para mostrar mensajes en la página
  function mostrar(msg) {
    document.getElementById('output').innerHTML = msg;
  }

  // 7. Otras curiosidades útiles para principiantes
  // - El punto y coma es opcional, pero recomendable
  // - Los arrays y objetos pueden contener cualquier tipo de dato
  // - El valor undefined es diferente de null
});
