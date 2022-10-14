/**
 * @param {number[]} nums
 * @return {number}
 */
const halveArray = function (nums) {
    // since js has no built-in heaps we can use sorted array
    // we sort array in ascending order to have constant access time to biggest element
    const heap = nums.sort((a, b) => a - b);
    let target = 0;
    let ans = 0;

    for (const num of nums) {
        target += num;
    }

    target /= 2;

    while (target > 0) {
        ans++;
        const largestVal = heap.pop();
        target -= (largestVal / 2);
        heap.push(largestVal / 2);
    }

    return ans;
};

console.log(halveArray([5, 19, 8, 1]));
