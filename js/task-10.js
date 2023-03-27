function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonCreate = document.querySelector('button[data-create]')
const boxesDiv = document.querySelector('#boxes')

buttonCreate.addEventListener('click', onClick)

function onClick(event) {
  const qty = document.querySelector('input[type ="number"]').value

  let width = 30,
    height = 30,
    subBoxHtml = ''

  if (qty) {

    for (let i = 1; i <= qty; i++) {
      const colorSet = getRandomHexColor();

      subBoxHtml += `<div style="width: ${width}px; height: ${height}px; background:${colorSet}">&nbsp;</div>`;
      //boxesDiv = boxesDiv.innerHTML + subBoxHtml;

      width += 10
      height += 10
    }
    boxesDiv.innerHTML = subBoxHtml
  }
  //console.log(qty)


}
