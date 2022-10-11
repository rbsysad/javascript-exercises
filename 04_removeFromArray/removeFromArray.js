const removeFromArray = function (array, ...args) {
    args.forEach((argument) => {
        array = array.filter((item) => item !== argument);
    });

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
