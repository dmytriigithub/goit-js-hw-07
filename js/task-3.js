const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {

    const inputValue = event.currentTarget.value.trim();

    nameOutput.textContent = inputValue || 'Anonymous';

    // inputValue ?
    //     nameOutput.textContent = inputValue :
    //     nameOutput.textContent = 'Anonymous';

});