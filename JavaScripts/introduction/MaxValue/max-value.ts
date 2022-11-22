interface ArrayNumber {
    nums: number[];
}

const maxValue = function (nums): number | void {
    let max = -Infinity;
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

export default maxValue;
