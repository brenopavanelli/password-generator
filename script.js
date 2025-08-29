class PasswordGenerator {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.updateLengthValue();
    }

    initializeElements() {
        this.lengthSlider = document.getElementById('length');
        this.lengthValue = document.getElementById('length-value');
        this.lowercaseCheck = document.getElementById('lowercase');
        this.uppercaseCheck = document.getElementById('uppercase');
        this.numbersCheck = document.getElementById('numbers');
        this.symbolsCheck = document.getElementById('symbols');
        this.excludeSimilarCheck = document.getElementById('exclude-similar');
        this.generateBtn = document.getElementById('generate-btn');
        this.passwordInput = document.getElementById('password');
        this.copyBtn = document.getElementById('copy-btn');
        this.strengthFill = document.getElementById('strength-fill');
        this.strengthText = document.getElementById('strength-text');

        // Character sets
        this.characters = {
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
        };

        this.similarCharacters = 'il1Lo0O';
    }

    bindEvents() {
        this.lengthSlider.addEventListener('input', () => this.updateLengthValue());
        this.generateBtn.addEventListener('click', () => this.generatePassword());
        this.copyBtn.addEventListener('click', () => this.copyPassword());
        
        // Generate password when options change
        [this.lowercaseCheck, this.uppercaseCheck, this.numbersCheck, this.symbolsCheck, this.excludeSimilarCheck].forEach(check => {
            check.addEventListener('change', () => {
                if (this.passwordInput.value) {
                    this.generatePassword();
                }
            });
        });

        // Generate initial password
        this.generatePassword();
    }

    updateLengthValue() {
        this.lengthValue.textContent = this.lengthSlider.value;
        if (this.passwordInput.value) {
            this.generatePassword();
        }
    }

    getCharacterSet() {
        let charset = '';
        
        if (this.lowercaseCheck.checked) charset += this.characters.lowercase;
        if (this.uppercaseCheck.checked) charset += this.characters.uppercase;
        if (this.numbersCheck.checked) charset += this.characters.numbers;
        if (this.symbolsCheck.checked) charset += this.characters.symbols;

        // Remove similar characters if option is checked
        if (this.excludeSimilarCheck.checked) {
            charset = charset.split('').filter(char => !this.similarCharacters.includes(char)).join('');
        }

        return charset;
    }

    generatePassword() {
        const length = parseInt(this.lengthSlider.value);
        const charset = this.getCharacterSet();

        if (charset === '') {
            alert('Please select at least one character type!');
            return;
        }

        let password = '';
        
        // Use cryptographically secure random number generation if available
        if (window.crypto && window.crypto.getRandomValues) {
            const array = new Uint32Array(length);
            window.crypto.getRandomValues(array);
            
            for (let i = 0; i < length; i++) {
                password += charset[array[i] % charset.length];
            }
        } else {
            // Fallback to Math.random
            for (let i = 0; i < length; i++) {
                password += charset[Math.floor(Math.random() * charset.length)];
            }
        }

        this.passwordInput.value = password;
        this.calculateStrength(password);
    }

    calculateStrength(password) {
        let score = 0;
        let feedback = '';

        // Length scoring
        if (password.length >= 8) score += 25;
        if (password.length >= 12) score += 25;
        if (password.length >= 16) score += 25;

        // Character variety scoring
        if (/[a-z]/.test(password)) score += 5;
        if (/[A-Z]/.test(password)) score += 5;
        if (/[0-9]/.test(password)) score += 5;
        if (/[^A-Za-z0-9]/.test(password)) score += 10;

        // Complexity bonus
        const uniqueChars = new Set(password).size;
        if (uniqueChars > password.length * 0.7) score += 5;

        // Determine strength level
        if (score < 30) {
            feedback = 'Weak';
            this.strengthFill.className = 'strength-fill weak';
            this.strengthFill.style.width = '25%';
        } else if (score < 60) {
            feedback = 'Fair';
            this.strengthFill.className = 'strength-fill fair';
            this.strengthFill.style.width = '50%';
        } else if (score < 80) {
            feedback = 'Good';
            this.strengthFill.className = 'strength-fill good';
            this.strengthFill.style.width = '75%';
        } else {
            feedback = 'Strong';
            this.strengthFill.className = 'strength-fill strong';
            this.strengthFill.style.width = '100%';
        }

        this.strengthText.textContent = feedback;
    }

    async copyPassword() {
        if (!this.passwordInput.value) {
            alert('Generate a password first!');
            return;
        }

        try {
            await navigator.clipboard.writeText(this.passwordInput.value);
            
            // Visual feedback
            const originalText = this.copyBtn.textContent;
            this.copyBtn.textContent = '✓';
            this.copyBtn.classList.add('copied');
            
            setTimeout(() => {
                this.copyBtn.textContent = originalText;
                this.copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            // Fallback for older browsers
            this.passwordInput.select();
            document.execCommand('copy');
            alert('Password copied to clipboard!');
        }
    }
}

// Initialize the password generator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
});