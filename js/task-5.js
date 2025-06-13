function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
});
