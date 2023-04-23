function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const nameColorRef = document.querySelector('.color');

btnChangeColor.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  nameColorRef.textContent = getRandomHexColor();
}