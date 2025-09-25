// Ejemplo 10 - Comentarios en JavaScript
// Mostramos cómo se usan los comentarios en JS

// Esto es un comentario de una línea
/*
  Esto es un comentario
  de varias líneas
*/

// Mostrar en consola
console.log("// Esto es un comentario de una línea");
console.log("/* Esto es un comentario de varias líneas */");

// Mostrar en la página
const output = document.createElement('div');
output.className = 'output';
output.innerHTML = `
  <strong>Comentarios en JS:</strong><br>
  // Esto es un comentario de una línea<br>
  /* Esto es un comentario de varias líneas */
`;
document.body.appendChild(output);
