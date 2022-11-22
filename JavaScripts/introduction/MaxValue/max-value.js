const maxValue = function (nums) {
    const max = -Infinity;
    if (nums == null) {
        return;
    }
    for (let num of nums) {
        if (num > max) {
            num = max;
        }
    }
    return max;
};

module.exports = {
    maxValue,
};
