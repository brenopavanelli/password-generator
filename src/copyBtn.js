const copyBtn = document.getElementById('copy-btn');

export default copyBtn.addEventListener('click', () => {
    const password = document.getElementById('password').value;
    navigator.clipboard.writeText(password)
      .then(
        () =>alert('Password copied to clipboard!')
      ).catch(
        err => console.error('Error copying password: ', err)
      );                                                 
})