/**
 * @param {number[]} nums
 * @return {number}
 */
const totalSteps = function(nums) {
    const stack  = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        let count = 0;

        // add values to monotonic stack
        // while biggest value in stack less than current value -> pop the value from stack and count how many deletions it required
        while (stack.length && stack[stack.length - 1][0] < nums[i]) {
            count = Math.max(count + 1, stack[stack.length - 1][1]);
            stack.pop();
        }

        stack.push([nums[i], count]);
    }

    return Math.max(...stack.map(([num, count]) => count));
};

console.log(totalSteps([5,3,4,4,7,3,6,11,8,5,11])); // 3
console.log(totalSteps([4,5,7,7,13])); // 0)
