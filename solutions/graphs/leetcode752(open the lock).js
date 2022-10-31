/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function(deadends, target) {
    if (deadends.includes('0000')) {
        return -1;
    }

    let queue = ['0000'];
    let seen = new Set([...deadends, '0000']);

    let steps = 0;

    while (queue.length) {
        let len = queue.length;
        let nextQueue = [];

       for (let i = 0; i < len; i++) {
           const node = queue[i];
           if (node === target) {
               return steps;
           }

           for (const neighbor of getNeighbors(node)) {
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
 * @param {string} node
 * @return {string[]}
 */
function getNeighbors(node) {
    let ans = [];

    for (let i = 0; i < 4; i++) {
        let num = node[i];

        for (const change of [-1, 1]) {
            let x = (+num + change + 10) % 10;
            ans.push(node.slice(0, i) + x + node.slice(i + 1));
        }
    }

    return ans;
}
