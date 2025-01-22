const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";

function updateDisplay(value) {
  display.textContent = value || "0";
}

function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("0");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      clearCalculator();
      return;
    }

    if (value === "=") {
      if (previousInput && operator && currentInput) {
        const result = eval(`${previousInput} ${operator} ${currentInput}`);
        updateDisplay(result);
        previousInput = result.toString();
        currentInput = "";
        operator = "";
      }
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        currentInput = "";
      }
      operator = value;
      return;
    }

    currentInput += value;
    updateDisplay(currentInput);
  });
});
