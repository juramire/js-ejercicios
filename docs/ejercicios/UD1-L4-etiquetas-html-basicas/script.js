// UD1-L4 · Etiquetas HTML básicas
// Ejemplo motivacional: ¿Por qué los títulos y párrafos son importantes para el SEO y la accesibilidad?

const output = document.getElementById('output');
output.innerHTML = `
  <strong>Etiquetas básicas:</strong><br>
  &lt;h1&gt; a &lt;h6&gt;: títulos<br>
  &lt;p&gt;: párrafos<br>
  &lt;a&gt;: enlaces<br>
  &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;: listas<br>
  &lt;img&gt;: imágenes<br><br>
  <em>Ejemplo real:</em> Un buen uso de títulos y listas mejora el posicionamiento en buscadores y la experiencia de usuarios con lectores de pantalla.
`;

console.log('Etiquetas HTML básicas: títulos, párrafos, enlaces, listas, imágenes.');
