/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function(equations, values, queries) {
    const graph = new Map();

    function answerQuery(start, end) {
        if (!graph.has(start)) {
            return -1;
        }

        let seen = new Set([start]);
        let stack = [[start, 1]];

        while (stack.length) {
            const [node, ratio] = stack.pop();
            if (node === end) {
                return ratio;
            }

            if (graph.has(node)) {
                for (const [neighbor, val] of graph.get(node)) {
                    if (!seen.has(neighbor)) {
                        seen.add(neighbor);
                        stack.push([neighbor, ratio * val]);
                    }
                }
            }
        }

        return -1;
    }

    for (let i = 0; i < equations.length; i++) {
        const [numerator, denominator]  = equations[i];
        const val = values[i];

        if (!graph.has(numerator)) {
            graph.set(numerator, new Map());
        }

        if (!graph.has(denominator)) {
            graph.set(denominator, new Map());
        }

        graph.get(numerator).set(denominator, val);
        graph.get(denominator).set(numerator, 1 / val);
    }

    let ans = [];

    for (const [numenator, denominator] of queries) {
        ans.push(answerQuery(numenator, denominator));
    }

    return ans;
};
