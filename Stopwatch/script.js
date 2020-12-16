const div = document.querySelector(".button-container");
const timer = document.querySelector(".timer");

let s = 0;

function start() {
  return setInterval(function () {
    s += 10;
    timer.innerHTML = convertTime(s);
  }, 10);
}

function convertTime(s) {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return (
    formatTime(hrs) +
    ":" +
    formatTime(mins) +
    ":" +
    formatTime(secs) +
    "." +
    ms.toString().slice(0, -1).padStart(2, "0")
  );
}

const formatTime = (a) => {
  return a.toString().padStart(2, "0");
};

let click;
div.addEventListener("click", (e) => {
  if (e.target.id === "button-start") {
    if (!click) click = start();
  }
  if (e.target.id === "button-pause") {
    clearInterval(click);
  }
  if (e.target.id === "button-reset") {
    s = 0;
    clearInterval(click);
    timer.innerHTML = convertTime(0);
    click = null;
  }
});
