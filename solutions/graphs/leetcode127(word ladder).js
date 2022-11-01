/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    let steps = 0;
    let queue = [beginWord];
    let seen = new Set([beginWord]);

    const allVariations = new Map();

    [...wordList, beginWord].forEach(word => {
        if (!allVariations.has(word)) {
            allVariations.set(word, getNeighbors(word, wordList));
        }
    });

    while (queue.length) {
        let len = queue.length;
        let nextQueue = [];

        for (let i = 0; i < len; i++) {
            const curr = queue[i];

            if (curr === endWord) {
                return steps + 1;
            }

            const currNeighbors = allVariations.get(curr)

            if (currNeighbors.length === 0) {
                return 0;
            }

            for (const neighbor of currNeighbors) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }


        }

        steps++;
        queue = nextQueue;
    }

    return 0;
};

/**
 * @param {string} word
 * @param {string[]} wordList
 * @return {string[]}
 */
function getNeighbors(word, wordList) {
    let ans = [];
    const changes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);

        for (const change of changes) {
            if (char === change) {
                continue;
            }

            const newWord = word.slice(0, i) + change + word.slice(i + 1);
            if (wordList.includes(newWord)) {
                ans.push(newWord);
            }
        }
    }

    return ans;
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"])); // 5
console.log(ladderLength('hot', 'dog', ["hot", "dog"])); // 0
console.log(ladderLength('hit', 'cog', ["hot", "dot", "tog", "cog"])); // 0

