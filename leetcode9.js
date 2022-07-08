

const isPalindrome = function(x) {
    const numsString = `${x}`;
    const len = numsString.length;

    if (len === 1) {
        return true;
    }

    for (let i = 0; i < len/2; i++) {
        if (numsString[i] !== numsString[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(-121));
