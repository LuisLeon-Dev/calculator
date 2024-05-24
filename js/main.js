const display = document.getElementById("display");
let lastPressedEquals = false;

function appendToDisplay(value) {
  if (lastPressedEquals && !isNaN(value)) {
    display.value = value;
    lastPressedEquals = false;
  } else {
    display.value += value;
  }
}

function calculate() {
  try {
    display.value = math.evaluate(display.value);
    lastPressedEquals = true;
  } catch (e) {
    display.value = "Error";
    lastPressedEquals = true;
  }
}

function clearDisplay() {
  display.value = "";
  lastPressedEquals = false;
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function randomNumber() {
  display.value = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
}
