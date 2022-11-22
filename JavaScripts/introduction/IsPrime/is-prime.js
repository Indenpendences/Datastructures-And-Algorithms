const isPrime = function (number) {
    let counter = 0;
    if (number < 2) {
        return false;
    }
    for (let index = 2; index <= Math.sqrt(number); index++) {
        if (number % index === 0) {
            return false;
        }
    }
    return true;
};

module.exports = {
    isPrime,
};
