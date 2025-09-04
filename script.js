// ===== Simple Calculator JavaScript =====
let result = document.getElementById("result");

// Append value when a button is clicked
function appendValue(val) {
  result.value += val;
}

// Clear all input
function clearResult() {
  result.value = "";
}

// Perform calculation
function calculate() {
  try {
    result.value = eval(result.value); // evaluates the expression
  } catch {
    result.value = "Error"; // if invalid input
  }
}