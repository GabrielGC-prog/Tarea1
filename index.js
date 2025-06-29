const btnEl = document.getElementById("crearCardBtn");
const contenedorEl = document.getElementById("contedorCards");

btnEl.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <h3>Hola card</h3>
  <p>Esta es una card creada con JS</p>
  `;
  contenedorEl.appendChild(card);
});
