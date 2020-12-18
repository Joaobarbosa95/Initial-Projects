// const n = eval("3 + 3 * 4");
// console.log(n);

const container = document.querySelector(".container");
const screen = document.querySelector(".screen");

let calc = "";

container.addEventListener("click", (e) => {
  if (e.target.localName === "button") {
    const dataSet = e.target.attributes[1].value;
    try {
      if (dataSet === "=" && calc !== "") {
        screen.innerHTML = eval(calc);
        calc = "";
      } else if (dataSet === "C") {
        calc = "";
        screen.innerHTML = "";
      } else if (dataSet !== "=" && dataSet !== "C") {
        calc += dataSet;
        screen.innerHTML = calc;
      }
    } catch (err) {
      screen.innerHTML = "error";
      calc = "";
    }
  }
});
