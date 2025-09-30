import gerarSenha from './geradores.js';

const passwordLength = document.getElementById('passwordLength');
const checkboxLowercase = document.getElementById('checkboxLowercase');
const checkboxUppercase = document.getElementById('checkboxUppercase');
const checkboxNumbers = document.getElementById('checkboxNumbers');
const checkboxSymbols = document.getElementById('checkboxSymbols');

const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {
    const length = passwordLength.value;
    const lowercase = checkboxLowercase.checked;
    const uppercase = checkboxUppercase.checked;
    const numbers = checkboxNumbers.checked;
    const symbols = checkboxSymbols.checked;

    const password = gerarSenha(length, uppercase, lowercase, numbers, symbols);
    console.log(password);
})

