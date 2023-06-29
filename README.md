**validation-helper-utils Package**

The **validation helper utils** is a lightweight npm package that provides validation helper functions for common validation scenarios. It includes functions to validate strings for email addresses, URLs, passwords, and credit card numbers.

**Installation**

You can install the package using npm:

```
npm install validation-helper-utils

```

**Usage**

To use the validation helper functions provided by **`validation-helper-utils`**, require the package in your JavaScript code:

```
const { isEmpty, isValidEmail, isValidUrl, isValidPassword, isValidCreditCard } = require('validation-helper-utils');
```

**isEmpty(str)**

This function checks if a string is empty.

**`str`** (string): The string to be validated.

**Example usage**:

```
console.log(isEmpty('')); // true
console.log(isEmpty('   ')); // true
console.log(isEmpty('abc')); // false
```

**isValidEmail(email)**


This function checks if a string is a valid email address.

**`email`** (string): The email address to be validated.

**Example usage**:

```
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalidemail')); // false
console.log(isValidEmail('test@example')); // false
```

**isValidUrl(url)**

This function checks if a string is a valid URL.

**`url`** (string): The URL to be validated.

**Example usage**:

```
console.log(isValidUrl('https://www.example.com')); // true
console.log(isValidUrl('invalidurl')); // false
console.log(isValidUrl('http://example')); // false
```

**isValidPassword(password)**

This function checks if a string is a valid password.

**`password`** (string): The password to be validated.

**Example usage**:

```
console.log(isValidPassword('Abc12345')); // true
console.log(isValidPassword('password')); // false
console.log(isValidPassword('12345678')); // false
```

**isValidCreditCard(cardNumber)**

This function checks if a string is a valid credit card number.

**`cardNumber`** (string): The credit card number to be validated.

**Example usage**:

```
console.log(isValidCreditCard('4111111111111111')); // true
console.log(isValidCreditCard('1234567890123456')); // false
console.log(isValidCreditCard('4111 1111 1111 1111')); // true
```


**Contributing**

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue on the https://github.com/olumidetech/validation-helper-utils.git.


**License**

This package is licensed under the **MIT License**.

Feel free to customize and expand upon this documentation template to suit your specific package features and requirements.