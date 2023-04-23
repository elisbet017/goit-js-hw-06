
// # 1

const itemElementsArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElementsArray.length}`);

// # 2

itemElementsArray.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
