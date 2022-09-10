/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
    const hashMap = new Map();

    for (let i = 1; i <= n; i++) {
        hashMap.set(i, 0);
    }

    for (let trustPair of trust) {
        const [person, trustsTo] = trustPair;
        if (hashMap.has(person)) {
            hashMap.delete(person);
        }


        if (hashMap.has(trustsTo)) {
            hashMap.set(trustsTo, hashMap.get(trustsTo) + 1);
        }
    }

    const possibleJudge = hashMap.keys().next().value;

    return (possibleJudge && hashMap.get(possibleJudge) === n - 1) ? possibleJudge : -1;
};

const findJudgeGraph = function(n, trust) {
    const count = new Array(n + 1).fill(0);

    for (let trustPair of trust) {
        const [trustGiver, trustReceiver] = trustPair;

        count[trustGiver]--;
        count[trustReceiver]++;
    }

    for (let i = 1; i <= n; i++) {
        if (count[i] === n - 1) return i;
    }

    return - 1;
}

console.log(findJudge(2, [[1, 2]]));
// console.log(findJudge(3, [[1, 3], [2, 3]]));
// console.log(findJudge(3, [[1, 2], [2, 3]]));
console.log(findJudgeGraph(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4,3 ]]));


