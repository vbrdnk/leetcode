/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let left = 0;
    let right = s.length - 1;
    let arr = s.split('');

    while (left < right) {
        while (!vowelsSet.has(arr[left]) && left < right) {
            left++;
        }

        while (!vowelsSet.has(arr[right]) && left < right) {
            right--;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join('');
};

console.log(reverseVowels('hello')); // holle
console.log(reverseVowels('ai')); // ia
console.log(reverseVowels('Aa')); // 'aA'

