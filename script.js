"use strict";

let colorInput = document.querySelector("#colorSelector");
let hexCode = document.querySelector(".hexColor");
let rgbColor = document.querySelector(".rgbColor");
let hslColor = document.querySelector(".hslColor");

colorInput.addEventListener("input", showColorData);

function showColorData() {
  hexCode.innerHTML = colorInput.value;
  document.querySelector(".colorBox").style.backgroundColor = colorInput.value;
  //rgbColor.innerHTML = hexToRGB();

  const validHEXInput = colorInput.value;
  const output = {
    r: parseInt(validHEXInput[1], 16),
    g: parseInt(validHEXInput[2], 16),
    b: parseInt(validHEXInput[3], 16),
  };

  rgbColor.innerHTML = output;

  hslColor.innerHTML = hexToRGB();
}

function hexToRGB(hex) {
  const validHEXInput = colorInput.value;
  const output = {
    r: parseInt(validHEXInput[1], 16),
    g: parseInt(validHEXInput[2], 16),
    b: parseInt(validHEXInput[3], 16),
  };
  return output;
}
