// UD7-L1 · Fetch, promesas y async
// Ejemplo motivacional: ¿Cómo carga una web los datos de un usuario desde un servidor?

const output = document.getElementById('output');

// Ejemplo de fetch y promesas
output.innerHTML = `<strong>Petición a servidor:</strong> (simulada)<br>`;
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    output.innerHTML += `<strong>Usuario recibido:</strong> ${data.name}<br>`;
  })
  .catch(() => {
    output.innerHTML += `<strong>Error al obtener datos.</strong><br>`;
  });

console.log('Fetch, promesas, async/await.');
