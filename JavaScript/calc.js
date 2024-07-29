// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to perform the calculation based on operator
  function calculate() {
    let display = document.getElementById('display').value;
    let result = eval(display); // Using eval() for simplicity; consider more secure alternatives for production
    document.getElementById('display').value = result;
  }
  
  // Function to handle operator buttons
  function operate(operator) {
    document.getElementById('display').value += operator;
  }
// Function to append numbers or operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to perform the calculation based on operator
  function calculate() {
    let display = document.getElementById('display').value;
    let result = eval(display); // Using eval() for simplicity; consider more secure alternatives for production
    document.getElementById('display').value = result;
  }
  
  // Function to handle operator buttons
  function operate(operator) {
    document.getElementById('display').value += operator;
  }
    