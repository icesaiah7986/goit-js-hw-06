const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const formValues = {};

    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    if (!formValues.email || !formValues.password) {
        alert('All fields must be filled in.');
        return;
    }

    console.log(formValues);
    loginForm.reset();
});
