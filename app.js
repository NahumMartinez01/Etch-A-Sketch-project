let notification = document.getElementById("notification");
let btnSelection = document.getElementById("btn-selection");
let btnBlack = document.getElementById("black");
let btnRandom = document.getElementById("random");
let btnReset = document.getElementById("reset");
let draw = document.getElementById("text-draw");
let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
  draw.innerText = "Click to draw";
  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;

      if (click) {
        draw.innerText = "Now you can draw";
      } else {
        draw.innerText = "Click to draw";
      }
    }
  });

  btnSelection.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
  });
});

const createBoard = (size) => {
  const container = document.querySelector(".container");

  container.style.gridTemplateRows = `repeat(${size},1fr)`;
  container.style.gridTemplateColumns = `repeat(${size},1fr)`;

  let totalDivs = size * size;

  for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement("div");

    div.addEventListener("mouseover", getColor);
    div.classList.add("card");
    container.insertAdjacentElement("beforeend", div);
  }
};

const getSize = () => {
  const input = prompt("Ingrese el tamaño de la cuadricula");

  if (input === "") {
    notification.innerHTML = "Ingrese un numero entre 16-100";
  } else if (input < 16 || input > 100) {
    notification.innerHTML = "Ingrese un numero entre 16 - 100";
  }

  return input;
};

btnBlack.addEventListener("click", (e) => setColor(e.target.id));
btnRandom.addEventListener("click", (e) => setColor(e.target.id));
btnReset.addEventListener("click", resetGame);

const setColor = (colorChoise) => {
  color = colorChoise;
};

function getColor() {
  if (click) {
    if (color === "random") {
      this.classList.add("card-random");
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.classList.add("card-black");
      this.style.backgroundColor = "black";
    }
  }
}

function resetGame() {
  const divs = document.querySelectorAll("div");

  divs.forEach((div) => {
    div.style.backgroundColor = "#FFFFFF";
  });
}
