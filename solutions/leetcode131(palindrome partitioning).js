/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
    const result = [];

    function dfs(i, input, slate) {
        // base case
        if (i === input.length) {
            result.push([...slate]);
            return;
        }

        // recursive case
        for (let j = i; j < input.length; j++) {
            const substr = input.substring(i, j + 1);
            if (isPalindrome(substr)) {
                slate.push(substr);
                dfs(j + 1, input, slate);
                slate.pop();
            }
        }
    }

    dfs(0, s, []);

    return result
};

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
