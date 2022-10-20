/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
    const map = new Map();
    const target = 'balloon';
    let count = 0;

    for (let char of text) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let loop = true;

    while (loop) {
        for (let i = 0; i < target.length; i++) {
            const char = target.charAt(i);
            if (!map.has(char) || map.get(char) === 0) {
                loop = false;
                break;
            } else {
                map.set(char, (map.get(char) - 1));
            }

            if (i === target.length - 1) {
                count++;
            }
        }
    }


    return count;
};

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
