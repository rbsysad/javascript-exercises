const getTheTitles = function (booksArray) {
    const titleArray = [];
    booksArray.forEach((book) => titleArray.push(book.title));
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
