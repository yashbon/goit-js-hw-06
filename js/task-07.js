const controlSize = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

controlSize.addEventListener('input', onControlSize)

function onControlSize(event) {
    textOutput.style.fontSize = `${event.currentTarget.value}px`
}
