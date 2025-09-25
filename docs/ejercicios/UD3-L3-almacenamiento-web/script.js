// UD3-L3 · Almacenamiento web
// Ejemplo motivacional: ¿Cómo recuerdan las webs tus preferencias o el contenido del carrito?

const output = document.getElementById('output');

// Guardar y recuperar datos con localStorage
localStorage.setItem('usuario', 'Juan');
const usuario = localStorage.getItem('usuario');

// Guardar y recuperar datos con sessionStorage
sessionStorage.setItem('carrito', '3 productos');
const carrito = sessionStorage.getItem('carrito');

output.innerHTML = `
  <strong>localStorage:</strong> usuario = ${usuario}<br>
  <strong>sessionStorage:</strong> carrito = ${carrito}<br>
  <em>Ejemplo real:</em> Tu nombre o el carrito de la compra pueden guardarse en el navegador para recordarlos entre sesiones o pestañas.
`;

console.log('Almacenamiento web: localStorage, sessionStorage.');
