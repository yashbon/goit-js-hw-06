const form = document.querySelector('.login-form')
const submit = document.querySelector('button[type=submit]')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {

    const userEmail = event.currentTarget.email.value;
    const userPassword = event.currentTarget.password.value;

    if (!userEmail || !userPassword) {
        alert('всі поля повинні бути заповнені')
    } else {
        const userForm = {
            email: '',
            password: ''
        }
        userForm.email = userEmail;
        userForm.password = userPassword;

        // Output to console
        console.log(userForm);

        // reset
        event.currentTarget.reset();
    }
    // form does not reload
    event.preventDefault()
}


