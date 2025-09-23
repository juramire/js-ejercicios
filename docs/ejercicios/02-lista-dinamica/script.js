const lista = document.getElementById("lista");
const form = document.getElementById("form");
const input = document.getElementById("item");

const datos = ["HTML", "CSS", "JavaScript"];

function render() {
  lista.innerHTML = "";
  datos.forEach((texto, i) => {
    const li = document.createElement("li");
    li.textContent = texto;
    const borrar = document.createElement("button");
    borrar.textContent = "Eliminar";
    borrar.addEventListener("click", () => {
      datos.splice(i, 1);
      render();
    });
    li.appendChild(borrar);
    lista.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value.trim();
  if (valor) {
    datos.push(valor);
    input.value = "";
    render();
  }
});

render();

