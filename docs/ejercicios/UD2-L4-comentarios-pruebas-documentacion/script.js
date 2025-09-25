// UD2-L4 · Comentarios, pruebas y documentación
// Ejemplo motivacional: ¿Por qué un programador dedica tiempo a escribir comentarios y pruebas?

const output = document.getElementById('output');

// Comentario de línea: explica una instrucción concreta
let suma = 2 + 2; // Suma dos números

/*
Comentario de bloque:
Sirve para explicar fragmentos más largos o complejos de código.
*/

output.innerHTML = `
  <strong>Comentarios:</strong> // de línea, /* de bloque */<br>
  <strong>Pruebas:</strong> Verifica que el código funciona como esperas.<br>
  <strong>Documentación:</strong> Explica el propósito y uso del código.<br>
  <em>Ejemplo real:</em> Un buen comentario o prueba puede ahorrar horas de trabajo a cualquier equipo de desarrollo.
`;

console.log('Comentarios, pruebas y documentación: fundamentales para el trabajo en equipo y el mantenimiento.');
