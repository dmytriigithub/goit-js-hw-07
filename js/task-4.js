const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const emailKey = emailInput.name;
    const passwordKey = passwordInput.name;

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    const data = {
        [emailKey]: emailValue,
        [passwordKey]: passwordValue
    };

    console.log(data);
    form.reset();
});
