const passwordLength = document.getElementById('passwordLength');
const lengthValue = document.getElementById('length-value');

export default passwordLength.addEventListener('input', () => {
      lengthValue.innerHTML = passwordLength.value;
})