let currentOperand = '';
let previousOperand = '';
let operator = null;
function appendNumber(number) {
  currentOperand += number.toString();
  updateDisplay();
}

function chooseOperator(selectedOperator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') compute();
  operator = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation;
  operator = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operator = null;
  updateDisplay();
}
function updateDisplay() {
  document.getElementById('display').innerText = currentOperand || previousOperand || '0';
}
