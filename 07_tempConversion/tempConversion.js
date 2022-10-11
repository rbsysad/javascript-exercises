const ftoc = function (givenTemp) {
    return Math.round((givenTemp - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (givenTemp) {
    return Math.round((givenTemp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
