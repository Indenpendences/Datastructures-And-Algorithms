const isPrime = function (number: number): boolean {
    let counter: number = 0;
    if (number < 2) {
        return false;
    }
    for (let index: number = 2; index <= Math.sqrt(number); index++) {
        if (number % index == 0) {
            return false;
        }
    }
    return true;
};

export default isPrime;
