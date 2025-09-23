const elementos = ["Manzana", "Banana", "Kiwi"];

const lista = document.querySelector("#lista");
const resumen = document.querySelector("#resumen");
const formulario = document.querySelector("#formulario");
const entrada = document.querySelector("#nuevoElemento");
const acciones = document.querySelector(".acciones");

function renderizarLista() {
  lista.innerHTML = "";

  if (!elementos.length) {
    const vacio = document.createElement("li");
    vacio.textContent = "No hay elementos en la lista.";
    vacio.className = "lista__vacio";
    lista.appendChild(vacio);
    resumen.textContent = "La lista está vacía. Agrega un elemento para empezar.";
    return;
  }

  const fragmento = document.createDocumentFragment();

  elementos.forEach((item, indice) => {
    const li = document.createElement("li");
    li.textContent = `${indice + 1}. ${item}`;
    fragmento.appendChild(li);
  });

  lista.appendChild(fragmento);
  resumen.textContent = `Total de elementos: ${elementos.length}`;
}

renderizarLista();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valor = entrada.value.trim();

  if (!valor) {
    entrada.focus();
    return;
  }

  elementos.push(valor);
  entrada.value = "";
  entrada.focus();
  renderizarLista();
});

acciones.addEventListener("click", (evento) => {
  if (!(evento.target instanceof HTMLButtonElement)) {
    return;
  }

  const accion = evento.target.dataset.accion;

  switch (accion) {
    case "ordenar": {
      elementos.sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }));
      break;
    }
    case "invertir": {
      elementos.reverse();
      break;
    }
    case "eliminar": {
      if (elementos.length) {
        elementos.pop();
      }
      break;
    }
    case "vaciar": {
      if (elementos.length) {
        elementos.splice(0, elementos.length);
      }
      break;
    }
    default:
      return;
  }

  renderizarLista();
});
