const fibonacci = function (element) {
    // Reject negatives
    if (element < 0) {
        return 'OOPS';
    }

    // Keep track of previous 2 numbers and next number
    let n1 = 0,
        n2 = 1,
        nextNum;

    // Determine element, if string convert to num
    for (let i = 1; i <= +element; i++) {
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
