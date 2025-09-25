// UD1-L3 · Estructura básica de un documento HTML
// Ejemplo motivacional: ¿Por qué algunas webs se ven mal en el móvil? ¡La estructura importa!

const output = document.getElementById('output');
output.innerHTML = `
  <strong>Partes de un HTML:</strong><br>
  &lt;!DOCTYPE html&gt;<br>
  &lt;html&gt; &lt;head&gt; &lt;body&gt;<br>
  &lt;head&gt;: metadatos, título, enlaces a CSS/JS<br>
  &lt;body&gt;: el contenido visible<br><br>
  <em>Ejemplo real:</em> Si olvidas la meta viewport, tu web no será responsive y se verá mal en móviles.
`;

console.log('Estructura básica de un HTML: doctype, html, head, body.');
