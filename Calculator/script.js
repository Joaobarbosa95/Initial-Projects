// const n = eval("3 + 3 * 4");
// console.log(n);

const container = document.querySelector(".container");
const screen = document.querySelector(".screen");

let calc = "";
let lastKey = "";
const operators = ["+", "-", "/", "*", "."];
let dots = 0;

const update = function (dataSet) {
  calc += dataSet;
  lastKey = dataSet;
  screen.innerHTML = calc;
};

container.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    const dataSet = e.target.getAttribute("data-set");

    if (dataSet === "=" && calc !== "") {
      const equal = eval(calc);
      screen.innerHTML = equal;
      calc = equal;
    } else if (dataSet === "C") {
      calc = "";
      lastKey = "";
      dots = 0;
      screen.innerHTML = "";
    } else if (operators.includes(dataSet)) {
      if (calc.length < 1) return;
      if (dots === 1 && dataSet !== ".") {
        dots = 0;
        update(dataSet);
      } else if (dots === 0 && dataSet === ".") {
        dots++;
        update(dataSet);
      } else if (
        (dots === 1 && dataSet === ".") ||
        operators.includes(lastKey)
      ) {
      } else {
        update(dataSet);
      }
    } else {
      update(dataSet);
    }
  }
});
