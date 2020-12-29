document.querySelector("body").addEventListener("keydown", (e) => {
  const audio = new Audio(`sounds/${e.key}.wav`);

  if (e.key === "e" || e.key === "r") {
    const hatOne = document.querySelector(".hatOne").classList;
    hatOne.toggle("animation-crash");
    setTimeout(() => {
      hatOne.remove("animation-crash");
    }, 500);
  }

  if (e.key === "k") {
    const hatTwo = document.querySelector(".hatTwo").classList;
    hatTwo.toggle("animation-hihat");
    setTimeout(() => {
      hatTwo.remove("animation-hihat");
    }, 500);
  }

  const btn = document.querySelector(`.button-${e.key}`).classList;
  btn.toggle("animation-btn");
  setTimeout(() => {
    btn.remove("animation-btn");
  }, 500);

  // console.log(btn);
  audio.play();
});
