const form = document.querySelector('.input')
const input = form.querySelector('.email-input')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', e => {
    e.preventDefault()
    hideErrors()
    const email = input.value
    if (!validate_email(email)) {
        revealErrors()
    }
    return
})

function validate_email(email) {
    const mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.match(mailFormat)) return true
    return false;
}

function revealErrors() {
    input.classList.add('error')
    errorMessage.classList.remove('hidden')
}

function hideErrors() {
    input.classList.remove('error')
    errorMessage.classList.add('hidden')
}

