const colorPalette = document.getElementById('color-palette');
const pixBoard = document.getElementById('pixel-board');
const blackColor = document.getElementById('black');
const blueColor = document.getElementById('blue');
const greenColor = document.getElementById('green');
const orangeColor = document.getElementById('orange');
const palette = document.querySelector('.color');
const pixelsBox = document.getElementsByClassName('pixel');
const clearBottom = document.getElementById('clear-board');

function selected(e) {
  let selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  e.target.classList.add('selected');
}
blackColor.addEventListener('click', selected);
blueColor.addEventListener('click', selected);
greenColor.addEventListener('click', selected);
orangeColor.addEventListener('click', selected);

function colorSelect(color) {
  let corA = document.getElementsByClassName('selected')[0];
  corA.classList.remove('selected');
  color.classList.add('selected');
}

for (let index = 0; index < palette.length; index += 1) {
  palette[index].addEventListener('click', function (e) {
    colorSelect(e.target);
  });
}

function colorBox(pixel) {
  let colorFix = window.getComputedStyle(
    document.querySelector('.selected')
  ).backgroundColor;
  pixel.style.backgroundColor = colorFix;
}

for (let index = 0; index < pixelsBox.length; index += 1) {
  pixelsBox[index].addEventListener('click', function (e) {
    colorBox(e.target);
  });
}

function clear() {
  let pixelsBx = document.getElementsByClassName('pixel');
  clearBottom.addEventListener('click', () => {
    for (index = 0; index < pixelsBx.length; index += 1) {
      pixelsBx[index].style.backgroundColor = 'white';
    }
  });
}
clear();
