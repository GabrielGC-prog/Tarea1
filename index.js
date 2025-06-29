/*
DOM => document objet mode
va a ser el documento html
capturar elementos del dom (html) los voy a trabajar en el archivo JS y los voy a "retornar" al html
- escuchador de eventos=> los q se hacen con el mouse y los del teclado

- crear elementos html e insertarlos en el documento original

cuando se le de click al boton
el valor que tenia el input se muestre dentro del div
con el formato Hola ${nombre}
*/

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
/* quede en 1 hora 10minutos del video de la clase 8*/
