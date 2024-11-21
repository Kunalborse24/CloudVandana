
document.addEventListener("DOMContentLoaded", () => {
    const resultField = document.getElementById("result");
    const clearButton = document.getElementById("clear");
    const buttons = document.querySelectorAll(".number-buttons button, .operator-buttons button");
  
   
    clearButton.addEventListener("click", () => {
      resultField.value = "";
    });
  
   
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.textContent;
  
        if (value === "=") {
          try {
            resultField.value = eval(resultField.value.replace("×", "*").replace("÷", "/"));
          } catch {
            resultField.value = "Error";
          }
        } else {
          resultField.value += value;
        }
      });
    });
  });
  