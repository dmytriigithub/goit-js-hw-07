const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const emailKey = emailInput.name;
    const passwordKey = passwordInput.name;

    if (emailValue === '' || passwordValue === '') {
        return alert('All form fields must be filled in');
    }

    const data = {
        [emailKey]: emailValue,
        [passwordKey]: passwordValue
    };

    console.log(data);
    loginForm.reset();
});
