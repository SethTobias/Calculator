let display = document.querySelector("[data-screen]");

let btn7 = document.querySelector("[data-7]");
btn7.addEventListener("click", () => addValue(btn7.value));
let btn8 = document.querySelector("[data-8]");
btn8.addEventListener("click", () => addValue(btn8.value));
let btn9 = document.querySelector("[data-9]");
btn9.addEventListener("click", () => addValue(btn9.value));

let btn4 = document.querySelector("[data-4]");
btn4.addEventListener("click", () => addValue(btn4.value));
let btn5 = document.querySelector("[data-5]");
btn5.addEventListener("click", () => addValue(btn5.value));
let btn6 = document.querySelector("[data-6]");
btn6.addEventListener("click", () => addValue(btn6.value));

let btn1 = document.querySelector("[data-1]");
btn1.addEventListener("click", () => addValue(btn1.value));
let btn2 = document.querySelector("[data-2]");
btn2.addEventListener("click", () => addValue(btn2.value));
let btn3 = document.querySelector("[data-3]");
btn3.addEventListener("click", () => addValue(btn3.value));

let btn0 = document.querySelector("[data-0]");
btn0.addEventListener("click", () => addValue(btn0.value));

let btnPlus = document.querySelector("[data-plus]");
btnPlus.addEventListener("click", () => addValue(btnPlus.value));
let btnMinus = document.querySelector("[data-minus]");
btnMinus.addEventListener("click", () => addValue(btnMinus.value));
let btnTimes = document.querySelector("[data-times]");
btnTimes.addEventListener("click", () => addValue(btnTimes.value));
let btnDivide = document.querySelector("[data-divide]");
btnDivide.addEventListener("click", () => addValue(btnDivide.value));
let btnDecimal = document.querySelector("[data-decimal]");

function addValue(value) {
  display.value += value;
}

let equal = document.querySelector("[data-equal]");
equal.addEventListener("click", () => output(display.value));

function output(value) {
  console.log("Value to be evaluated:", value);

  try {
    display.value = eval(value);
  } catch (error) {
    console.error("Error during evaluation:", error);
    display.value = "Error";
  }
}
