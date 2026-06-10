const emailInput = document.querySelector('input[name="email"]');
if (emailInput) {
    emailInput.style.border = '2px solid yellow';
}

const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.querySelector('input[name="password"]');

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '👀';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '🙈';
    }
});

const loginForm = document.getElementById('loginForm');
const mensajeExito = document.getElementById('mensajeExito');
const mensajeError = document.getElementById('mensajeError');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    mensajeExito.classList.add('hidden');
    mensajeError.classList.add('hidden');

    if (email === 'admin@gmail.com' && password === '1234') {
        mensajeExito.classList.remove('hidden');
        setTimeout(() => {
            mensajeExito.classList.add('hidden');
        }, 2000);
    } else {
        mensajeError.classList.remove('hidden');
        setTimeout(() => {
            mensajeError.classList.add('hidden');
        }, 2000);
    }
});