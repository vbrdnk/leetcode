/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function(edges) {
    const [[a, b], [c, d]] = edges;
    return a === c || b === c ? c : d;
};
