"use strict";

let colorInput = document.querySelector("#colorSelector");

colorInput.addEventListener("input", () => {
  document.querySelector(".hexColor").innerHTML = colorInput.value;
  document.querySelector(".rgbColor").innerHTML = colorInput.value;
  document.querySelector(".hslColor").innerHTML = colorInput.value;
});
