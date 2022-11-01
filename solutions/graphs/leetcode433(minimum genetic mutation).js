/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
const minMutation = function(start, end, bank) {
    let queue = [start];
    let steps = 0;
    let seen = new Set([start]);

    while (queue.length) {
        let len = queue.length;
        let nextQueue = [];

        for (let i = 0; i < len; i++) {
            const curr = queue[i];

            if (curr === end) {
                return steps;
            }

            const currGeneNeighbors = getNeighbors(curr, bank);

            for (const neighbor of currGeneNeighbors) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor);
                    nextQueue.push(neighbor);
                }
            }
        }

        steps++;
        queue = nextQueue;
    }

    return -1;
};

/**
 * @param {string} gene
 * @param {string[]} bank
 * @return {string[]}
 */
function getNeighbors(gene, bank) {
    const ans = [];

    for (let i = 0; i < 8; i++) {
        let char = gene.charAt(i);

        for (const change of ['A', 'C', 'G', 'T']) {
            if (char === change) {
                continue;
            }

            const newGene = gene.slice(0, i) + change + gene.slice(i + 1);
            if (bank.includes(newGene)) {
                ans.push(newGene);
            }
        }
    }

    return ans;
}

// console.log(minMutation('AACCGGTT', 'AACCGGTA', ["AACCGGTA"])); // 1
// console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA","AACCGCTA","AAACGGTA"])); // 2
console.log(minMutation('AAAAACCC', 'AACCCCCC', ["AAAACCCC","AAACCCCC","AACCCCCC"])); // 3
