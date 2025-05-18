 const display = document.getElementById('display');
    let currentInput = '';

    function append(char) {
      currentInput += char;
      display.textContent = currentInput;
    }

    function calculate() {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    }

    function clearDisplay() {
      currentInput = '';
      display.textContent = '0';
    }