const btn = document.getElementById("btn");
const msg = document.getElementById("mensaje");

btn.addEventListener("click", () => {
  msg.textContent = "¡Has hecho clic!";
});
