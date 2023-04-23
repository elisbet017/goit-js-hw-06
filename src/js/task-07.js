const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.range.addEventListener("input", onRangeChange);

function onRangeChange(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
