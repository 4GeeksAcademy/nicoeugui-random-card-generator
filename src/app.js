/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const arrayValorCard = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const arrayTipoPalo = ["♦", "♥", "♠", "♣"];

const claseCartaMain = document.querySelector(".card");
const divPaloTop = document.createElement("div");
const divCartaValor = document.createElement("div");
const divPaloBottom = document.createElement("div");

function randomCartaValor(arrayCard) {
  const valorCardIndex = Math.floor(Math.random() * arrayCard.length);
  const randomValorCard = arrayCard[valorCardIndex];
  divCartaValor.innerHTML = randomValorCard;
  divCartaValor.classList.add("valorCarta");
}

function randomTipoPalo(arrayCard) {
  const tipoPaloIndex = Math.floor(Math.random() * arrayCard.length);
  const randomTipoPalo = arrayCard[tipoPaloIndex];
  divPaloTop.innerHTML = randomTipoPalo;
  divPaloBottom.innerHTML = randomTipoPalo;
  divPaloTop.className = "paloTop";
  divPaloBottom.className = "paloBottom";

  if (randomTipoPalo === "♦") {
    divPaloTop.classList.add("diamond");
    divPaloBottom.classList.add("diamond");
  }
  
  if (randomTipoPalo === "♥") {
    divPaloTop.classList.add("heart");
    divPaloBottom.classList.add("heart");
  }
  
  if (randomTipoPalo === "♠") {
    divPaloTop.classList.add("spade");
    divPaloBottom.classList.add("spade");
  }
  
  if (randomTipoPalo === "♣") {
    divPaloTop.classList.add("club");
    divPaloBottom.classList.add("club");
  }
  
  }

  claseCartaMain.innerHTML = ""; // Limpiar el contenido antes de agregar elementos
  claseCartaMain.appendChild(divPaloTop);
  claseCartaMain.appendChild(divCartaValor);
  claseCartaMain.appendChild(divPaloBottom);
}

// BOTON generar card

const botonGenerarCard = document.createElement("button");
botonGenerarCard.innerText = "Generar carta";
botonGenerarCard.classList.add("btn", "btn-secondary", "btn-sm");

const divBoton = document.createElement("div");
divBoton.appendChild(botonGenerarCard);

document.body.appendChild(divBoton);

botonGenerarCard.addEventListener("click", function(event) {
  randomCartaValor(arrayValorCard);
  randomTipoPalo(arrayTipoPalo);
});

// se carga
window.onload = function() {
  randomCartaValor(arrayValorCard);
  randomTipoPalo(arrayTipoPalo);
};

// cada 10 sec aparece un card nuevo
setInterval(function() {
  randomCartaValor(arrayValorCard);
  randomTipoPalo(arrayTipoPalo);
  //10 segundos
}, 10000);
