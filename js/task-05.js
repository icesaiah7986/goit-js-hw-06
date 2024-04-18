let nameInput = document.getElementById('name-input');
        let nameOutput = document.getElementById('name-output');

        nameInput.addEventListener('input', function() {
            if (nameInput.value.trim() === '') {
                nameOutput.textContent = 'Anonymous';
            } else {
                nameOutput.textContent = nameInput.value;
            }
        });