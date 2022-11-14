/**
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = function(stones) {
    let count = 0;
    const visited = new Set();

    for (let s1 of stones) {
        if (!visited.has(s1)) {
            dfs(s1);
            count++;
        }
    }

    function dfs(stone) {
        visited.add(stone);

        for (let s2 of stones) {
            if (!visited.has(s2)) {
                if (stone[1] === s2[1] || stone[0] === s2[0]) {
                    dfs(s2);
                }
            }
        }
    }

    return stones.length - count;
};

console.log(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])); // 5
