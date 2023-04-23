const refs = {
  value: document.querySelector("#value"),
  decrementButton: document.querySelector('[data-action="decrement"]'),
  incrementButton: document.querySelector('[data-action="increment"]'),
};

const counterValue = {
  value: 0,
  decrement(value) {
    this.value -= 1;
  },
  increment(value) {
    this.value += 1;
  },
};

refs.decrementButton.addEventListener("click", onDecrementButtonClick);

refs.incrementButton.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue.decrement(value);
  refs.value.textContent = counterValue.value;
}

function onIncrementButtonClick() {
  counterValue.increment(value);
  refs.value.textContent = counterValue.value;
};
