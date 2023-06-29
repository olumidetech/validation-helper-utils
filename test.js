const { isEmpty, isValidEmail } = require('./index');

// Test isEmpty function
console.log(isEmpty('')); // true
console.log(isEmpty('   ')); // true
console.log(isEmpty('abc')); // false

// Test isValidEmail function
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalidemail')); // false
console.log(isValidEmail('test@example')); // false
