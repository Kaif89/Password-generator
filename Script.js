function generatePassword(length = 12) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allChars = upper + lower + numbers + symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    return password;
  }

  function generate() {
    const length = parseInt(document.getElementById('length').value) || 12;
    const result = generatePassword(length);
    document.getElementById('password').textContent = result;
  }

  function copyPassword() {
    const passwordElem = document.getElementById('password');
    const text = passwordElem.innerText;
    // Use the Clipboard API to write text
    navigator.clipboard.writeText(text).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}