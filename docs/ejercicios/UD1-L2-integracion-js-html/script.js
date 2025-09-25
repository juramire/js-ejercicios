// UD1-L2 · Integración de JavaScript en HTML
// Ejemplo motivacional: ¿Cómo se añade un script externo para validar un formulario?

const output = document.getElementById('output');

output.innerHTML = `
  <strong>Integración:</strong> &lt;script src="script.js"&gt;&lt;/script&gt;<br>
  <em>Ejemplo real:</em> Añadir un archivo JS externo para validar un formulario o mostrar mensajes dinámicos.
`;

console.log('Integración de JS en HTML: script interno y externo.');
