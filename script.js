"use strict";
//FIRST ATTEMPT
/* let colorInput = document.querySelector("#colorSelector");
let hexCode = document.querySelector(".hexColor");
let rgbColor = document.querySelector(".rgbColor");
let hslColor = document.querySelector(".hslColor");

colorInput.addEventListener("change", showColorData);
colorInput.addEventListener("input", showColorData);

function showColorData() {
  let hexValue = colorInput.value;
  //console.log(inputValue);

  document.querySelector(".colorBox").style.backgroundColor = hexValue;

  hexCode.innerHTML = hexValue;

  rgbColor.innerHTML = hexToRGB(hexValue);

  //hslColor.innerHTML = hexToRGB();
}

function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
} */

//SECOND ATTEMPT
let colorInput = document.querySelector("#colorSelector");
let hexColor = document.querySelector(".hexColor");
let rgbColor = document.querySelector(".rgbColor");
let hslColor = document.querySelector(".hslColor");

colorInput.addEventListener("change", getData);
colorInput.addEventListener("input", getData);

function getData() {
  const hexValue = colorInput.value;
  const rgbValue = hexToRGB(hexValue);
  const hslValue = rgbToHSL(rgbValue);

  displayColor(hexValue);
  displayColorsValues(hexValue, rgbValue, hslValue);
}

function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  return { r, g, b };
}

function rgbToHSL(rgbvalue) {
  let r = rgbvalue.r;
  let g = rgbvalue.g;
  let b = rgbvalue.b;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  // console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  const HSLvalue = {
    h: Math.round(h),
    s: Math.round(s),
    l: Math.round(l),
  };
  return HSLvalue;
}

function displayColor(color) {
  document.querySelector(".colorBox").style.backgroundColor = color;
}

function displayColorsValues(HEX, RGB, HSL) {
  hexColor.textContent = HEX;
  rgbColor.textContent = `${RGB.r}, ${RGB.g}, ${RGB.b},`;
  hslColor.textContent = `${HSL.h}, ${HSL.s}, ${HSL.l},`;
}
