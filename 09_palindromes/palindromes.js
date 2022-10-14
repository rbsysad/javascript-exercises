const palindromes = function (string) {
    // Regular expression to filter out non alphanumeric characters
    re = /[^A-Za-z0-9]/g;

    // Filter re with replace method
    const lowRegString = string.toLowerCase().replace(re, '');

    // Split string into array, reverse array, join string
    const reverseString = lowRegString.split('').reverse().join('');

    // Check if equal to non-reversed
    return lowRegString === reverseString;
};

// // Do not edit below this line
module.exports = palindromes;
