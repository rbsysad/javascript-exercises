const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (array) {
    return array.reduce((previous, current) => previous + current, 0);
};

const multiply = function (array) {
    return array.reduce((previous, current) => previous * current, 1);
};

const power = function (num1, num2) {
    let pow = 1;

    for (i = 0; i < num2; i++) {
        pow *= num1;
    }

    return pow;
};

const factorial = function (num) {
    let fact = 1;

    for (i = 1; i <= num; i++) {
        fact *= i;
    }

    return fact;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
