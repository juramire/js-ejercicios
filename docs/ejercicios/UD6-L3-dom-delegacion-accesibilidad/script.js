// UD6-L3 · DOM: delegación y accesibilidad
// Ejemplo motivacional: ¿Cómo se asegura una web de que todos los usuarios pueden interactuar con ella?

const output = document.getElementById('output');

// Delegación de eventos y accesibilidad
const lista = document.createElement('ul');
for (let i = 1; i <= 3; i++) {
  const item = document.createElement('li');
  item.textContent = 'Elemento ' + i;
  item.tabIndex = 0; // Accesibilidad
  lista.appendChild(item);
}
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    output.innerHTML = `<strong>Has hecho clic en:</strong> ${e.target.textContent}`;
  }
});
document.body.appendChild(lista);
output.innerHTML = `<strong>Lista accesible y con delegación de eventos.</strong><br>`;

console.log('DOM: delegación de eventos, accesibilidad, tabIndex, ARIA.');
