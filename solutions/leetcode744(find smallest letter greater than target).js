/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return letters[left % letters.length];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a')); // 'c'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c')); // 'f'
console.log(nextGreatestLetter(["x","x","y","y"], 'z')); // 'x'


