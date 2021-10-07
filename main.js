let numbers = document.getElementsByClassName("numbers");
let operator = document.getElementsByClassName("operator");

function showNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = () => {
      if (shouldClear == true) {
        input.value = "";
        shouldClear = false;
      }
      console.log(shouldClear, a, op);
      input.value += numbers[i].innerText;
    };
  }
}

showNumbers();

let a;
let op;
let shouldClear = false;

function showOperator() {
  for (let i = 0; i < operator.length; i++) {
    operator[i].onclick = () => {
      shouldClear = true;
      a = Number(input.value);
      op = operator[i].innerText;
      console.log(shouldClear, a, op);
    };
  }
}

function chooseAndPrintOperator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return a / b;
  }
}

showOperator();
let b;
eq.onclick = () => {
  b = Number(input.value);
  input.value = chooseAndPrintOperator(a, b, op);
  console.log(a, op, b);
};

function clear() {
  Ac.onclick = () => {
    input.value = "";
  };
}
clear();
