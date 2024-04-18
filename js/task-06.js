const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function() {
    const enteredLength = inputElement.value.length;
    const expectedLength = parseInt(inputElement.getAttribute('data-length'));

    if (enteredLength === expectedLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
});
