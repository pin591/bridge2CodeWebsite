const emailInput = document.querySelector('input[name="email"]');

if (emailInput) {
    emailInput.style.border = '2px solid yellow';
}

const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('input[name="password"]');

togglePassword.addEventListener('click', () => {

    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '👀';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '🙈';
    }

});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    mensajeExito.classList.remove('hidden'); 

    setTimeout(() => {
        mensajeExito.classList.add('hidden');
    }, 2000);
});