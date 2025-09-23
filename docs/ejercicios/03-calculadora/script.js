const pantalla = document.getElementById("pantalla");
const teclas = document.querySelectorAll("[data-k]");
const igual = document.getElementById("igual");
const clear = document.getElementById("clear");

let buffer = "";

function mostrar(valor) {
  pantalla.value = valor || "0";
}

teclas.forEach((btn) => {
  btn.addEventListener("click", () => {
    buffer += btn.dataset.k;
    mostrar(buffer);
  });
});

igual.addEventListener("click", () => {
  try {
    // Evalúa de forma simple; en ejercicios reales habla de seguridad.
    const resultado = Function(`"use strict";return (${buffer || 0})`)();
    buffer = String(resultado);
    mostrar(buffer);
  } catch {
    buffer = "";
    mostrar("Error");
  }
});

clear.addEventListener("click", () => {
  buffer = "";
  mostrar(buffer);
});

mostrar(buffer);

