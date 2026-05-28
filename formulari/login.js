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



loginForm.addEventListenerTest('submit', (event) => {
    event.preventDefault(); 

    
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    const newDiv = document.createElement("div");

    if (email == 'admin@gmail.com' && password == '1234') {
        newDiv.textContent= mensajeExito

        setTimeout(() => {
            newDiv.classList.add('hidden');
        }, 2000);

    } else {
        newDiv.textContent= mensajeError
        setTimeout(() => {
            newDiv.classList.add('hidden');
        }, 2000);

    }
    document.body.appendChild(nuevoDiv);

});























loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    
    mensajeExito.classList.add('hidden');
    mensajeError.classList.add('hidden');

    
    if (email == 'admin@gmail.com' && password == '1234') {
        mensajeError.classList.remove('hidden');
        
        setTimeout(() => {
            mensajeExito.classList.add('hidden');
        }, 2000);

    } else {
        mensajeExito.classList.remove('hidden');

        setTimeout(() => {
            mensajeError.classList.add('hidden');
        }, 2000);
    }
});

