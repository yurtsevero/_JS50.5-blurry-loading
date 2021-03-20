const image = document.querySelector(".image");
const percentage = document.querySelector(".percentage");
window.addEventListener("load", () => {});
let load = 0;

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

showImage = () => {
  load++;

  percentage.innerText = `${load}%`;
  percentage.style.opacity = scale(load, 0, 100, 1, 0);
  image.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
  if (load > 99) {
    clearInterval(interval);
  }
};

let interval = setInterval(showImage, 10);
