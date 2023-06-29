
// Helper function to check if a string is empty
function isEmpty(str) {
    return !str.trim();
  }
  
  // Helper function to check if a string is a valid email address
  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to check if a string is a valid URL
  function isValidUrl(url) {
    // Regular expression to validate URLs
    const urlRegex = /^(https?:\/\/)?([a-z0-9]+\.)?[a-z0-9][a-z0-9-]*\.[a-z]{2,}(\.[a-z]{2,})?$/i;
    return urlRegex.test(url);
  }
  
  // Helper function to check if a string is a valid password
  function isValidPassword(password) {
    // Password validation criteria: at least 8 characters long and contains at least one uppercase letter, one lowercase letter, and one digit.
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Helper function to check if a string is a valid credit card number
  function isValidCreditCard(cardNumber) {
    // Remove non-digit characters from the input
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');
  
    // Check if the cleaned card number is 16 digits long
    if (cleanedCardNumber.length !== 16) {
      return false;
    }
  
    // Luhn algorithm for credit card number validation
    let sum = 0;
    let isAlternate = false;
  
    for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanedCardNumber.charAt(i));
  
      if (isAlternate) {
        digit *= 2;
        if (digit > 9) {
          digit = digit - 9;
        }
      }
  
      sum += digit;
      isAlternate = !isAlternate;
    }
  
    return sum % 10 === 0;
  }
  
  // Export the helper functions
  module.exports = {
    isEmpty,
    isValidEmail,
    isValidUrl,
    isValidPassword,
    isValidCreditCard
  };
  