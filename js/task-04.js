let counterValue = 0;
        const counter = document.getElementById('value');
        const increaseBtn = document.querySelector(' [data-action="increment"]');
        const decreaseBtn = document.querySelector(' [data-action="decrement"]');

        increaseBtn.addEventListener('click', () => {
            counterValue++;
            counter.textContent = counterValue;
        });

        decreaseBtn.addEventListener('click', () => {
            counterValue--;
            counter.textContent = counterValue;
        });