/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = function(matches) {
    const zeroLosses = new Set();
    const oneLoss = new Set();
    const moreLosses = new Set();

    for (let [winner, loser] of matches) {
         if (!oneLoss.has(winner) && !moreLosses.has(winner)) {
             zeroLosses.add(winner);
         }

         if (zeroLosses.has(loser)) {
             zeroLosses.delete(loser);
             oneLoss.add(loser);
         } else if (oneLoss.has(loser)) {
             oneLoss.delete(loser);
             moreLosses.add(loser);
         } else if (moreLosses.has(loser)) {
             continue;
         } else {
             oneLoss.add(loser);
         }
    }

    return [[...zeroLosses.values()].sort((a, b) => a - b), [...oneLoss.values()].sort((a, b) => a - b)];
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])); // [[1,2,10],[4,5,7,8]]
