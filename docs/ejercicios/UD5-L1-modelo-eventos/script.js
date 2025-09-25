// UD5-L1 · Modelo de eventos
// Ejemplo motivacional: ¿Cómo detecta una web que has hecho clic en un botón?

const output = document.getElementById('output');

// Ejemplo de evento click
const boton = document.createElement('button');
boton.textContent = 'Haz clic aquí';
boton.onclick = () => {
  output.innerHTML += '<br>¡Has hecho clic en el botón!';
};
output.appendChild(boton);

console.log('Modelo de eventos: click, input, submit, etc.');
