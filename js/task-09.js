function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorOutput = document.querySelector('.color')
const changeColorButton = document.querySelector('.change-color')

changeColorButton.addEventListener('click', onClick)

function onClick(event) {
  const colorSet = getRandomHexColor();
  colorOutput.innerHTML = colorSet;
  document.querySelector('body').style = `background-color: ${colorSet}`
}
