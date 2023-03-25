const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput)

function onInput(event) {
    event.currentTarget.value ? nameOutput.innerHTML = event.currentTarget.value : nameOutput.innerHTML = 'Anonymous'
}

