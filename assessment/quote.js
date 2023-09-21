// Function to generate a random alphanumeric code
function generateRandomCode(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomCode = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomCode += charset.charAt(randomIndex);
    }

    return randomCode;
}

// Usage example: Generate a random 8-character code
const randomCode = generateRandomCode(8);
console.log("Random Code:", randomCode);
