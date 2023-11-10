// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', () => {
    usernameLabel.classList.add('required-popup');
});

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', () => {
    usernameLabel.classList.remove('required-popup');
});

// Validar valor do input
usernameInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value;

    if (inputValue.length >= 3) {
        usernameHelper.classList.remove('visible');
        usernameInput.classList.remove('error');
        usernameInput.classList.add('correct');
    } else {
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameHelper.innerText = 'O username deve ter pelo menos 3 caracteres';
        usernameHelper.classList.add('visible');
    }
});

// VALIDAÇÃO E-MAIL
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

// Mostrar popup de campo obrigatório
emailInput.addEventListener('focus', () => {
    emailLabel.classList.add('required-popup');
});

// Ocultar popup de campo obrigatório
emailInput.addEventListener('blur', () => {
    emailLabel.classList.remove('required-popup');
});

// Validar valor do input
emailInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value;

    if (isValidEmail(inputValue)) {
        emailHelper.classList.remove('visible');
        emailInput.classList.remove('error');
        emailInput.classList.add('correct');
    } else {
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = 'E-mail inválido';
        emailHelper.classList.add('visible');
    }
});

// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

// Mostrar popup de campo obrigatório
senhaInput.addEventListener('focus', () => {
    senhaLabel.classList.add('required-popup');
});

// Ocultar popup de campo obrigatório
senhaInput.addEventListener('blur', () => {
    senhaLabel.classList.remove('required-popup');
});

// Validar valor do inputSenha
senhaInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value;

    if (inputValue.length >= 6) {
        senhaHelper.classList.remove('visible');
        senhaInput.classList.remove('error');
        senhaInput.classList.add('correct');
    } else {
        senhaInput.classList.remove('correct');
        senhaInput.classList.add('error');
        senhaHelper.innerText = 'A senha deve ter pelo menos 6 caracteres';
        senhaHelper.classList.add('visible');
    }
});

// Função para validar e-mail
    function  isValidEmail(email) { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Manipula de evento para o envio do formulário
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar o envio padrão do formulário(vázio)

    const isUsernameValid = usernameInput.classList.contains('correct');
    const isEmailValid = isValidEmail(emailInput.value);
    const isSenhaValid = senhaInput.classList.contains('correct');

    if (isUsernameValid && isEmailValid && isSenhaValid) {
        alert('Usuário cadastrado com sucesso');
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
