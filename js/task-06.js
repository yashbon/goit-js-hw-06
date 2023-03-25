const inputSymbol = document.querySelector('#validation-input')

inputSymbol.addEventListener('blur', onInput)

function onInput(event) {
    const dataLength = inputSymbol.getAttribute('data-length');
    event.currentTarget.value.length >= dataLength ?
        (
            inputSymbol.classList.remove("invalid"),
            inputSymbol.classList.add("valid")
        ) : (
            inputSymbol.classList.remove("valid"),
            inputSymbol.classList.add("invalid")
        )
}
