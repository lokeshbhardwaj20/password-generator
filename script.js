document.addEventListener('DOMContentLoaded', function () {
  const generateButton = document.getElementById('generateButton');
  generateButton.addEventListener('click', generatePassword);

  function generatePassword() {
    const passwordLength = document.getElementById('passwordLength').value;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~`';

    let allChars = '';

    if (includeLowercase) {
      allChars += lowercaseChars;
    }

    if (includeUppercase) {
      allChars += uppercaseChars;
    }

    if (includeNumbers) {
      allChars += numberChars;
    }

    if (includeSpecialChars) {
      allChars += specialChars;
    }

    if (allChars === '') {
      alert('Please select at least one character type.');
      return;
    }

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    document.getElementById('generatedPassword').value = password;
  }
});
