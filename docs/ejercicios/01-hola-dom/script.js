const titulo = document.getElementById("titulo");
const btn = document.getElementById("cambiar");

titulo.textContent = "👋 Hola DOM";
btn.addEventListener("click", () => {
  titulo.textContent = titulo.textContent.includes("Hola")
    ? "🌈 ¡Mensaje cambiado!"
    : "👋 Hola DOM";
});

