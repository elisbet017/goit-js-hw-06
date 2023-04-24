// -------------------------- Не розв'язана ---------------------------


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divRef = document.querySelector("#boxes");
const divToArr = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxElement = '<div class="box"></div>';
    divToArr.push(boxElement);
  }

  const res = divToArr.join("");
  divRef.insertAdjacentHTML("afterbegin", res);
}


// function addBoxesSize(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i].style.width = `${30 + (i * 10)}px`;
//     array[i].style.height = `${30 + (i * 10)}px`;
//   }
// }

createBoxes(4);
