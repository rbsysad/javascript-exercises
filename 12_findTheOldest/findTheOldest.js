// Function for calculating age
const getAge = (birthYear, deathYear) => {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
};

// Use Array.reduce method to fild oldest person
const findTheOldest = function (personArray) {
    return personArray.reduce((oldestPerson, currentPerson) => {
        // Oldest age so far in array of objects
        const oldestAge = getAge(
            oldestPerson.yearOfBirth,
            oldestPerson.yearOfDeath
        );

        // Current age of element in array of objects
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );

        // If oldest is less than current, replace oldest with current
        return oldestAge < currentAge ? currentPerson : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
