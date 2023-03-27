function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector('[data-create]')
const boxesDiv = document.querySelector('#boxes')
const buttonDestroy = document.querySelector('[data-destroy]')

buttonCreate.addEventListener('click', onClickCreate)
buttonDestroy.addEventListener('click', onClickDestroy)


function onClickCreate(event) {
  const amount = document.querySelector('[type ="number"]').value

  createBoxes(amount)

}

function onClickDestroy(event) {
  boxesDiv.innerHTML = ''
  document.querySelector('[type ="number"]').value = ''
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let subBoxHtml = ''
  if (amount) {
    for (let i = 1; i <= amount; i++) {
      const colorSet = getRandomHexColor();

      subBoxHtml += `<div style="width: ${width}px; height: ${height}px; background:${colorSet}">&nbsp;</div>`;

      width += 10
      height += 10
    }
    boxesDiv.innerHTML = subBoxHtml
  }
}
