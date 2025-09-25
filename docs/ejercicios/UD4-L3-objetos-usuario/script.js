// UD4-L3 · Objetos definidos por el usuario
// Ejemplo motivacional: ¿Cómo representa una web a cada usuario o producto?

const output = document.getElementById('output');

const usuario = {
  nombre: 'Ana',
  edad: 25,
  email: 'ana@email.com'
};
output.innerHTML = `
  <strong>Usuario:</strong> ${usuario.nombre}, ${usuario.edad} años, ${usuario.email}<br>
  <em>Ejemplo real:</em> Un objeto usuario almacena los datos de cada persona registrada en una web.
`;

console.log('Objetos definidos por el usuario: propiedades, métodos, instanciación.');
