/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
    let stepAsideCount = 0;
    let stepUpOrDownCount = 0;

    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'R':
                stepAsideCount++;
                break;
            case 'L':
                stepAsideCount--;
                break;
            case 'U':
                stepUpOrDownCount++;
                break;
            case 'D':
                stepUpOrDownCount--;
                break;
        }
    }

    return stepAsideCount === 0 && stepUpOrDownCount === 0;

    // const map = new Map();
    //
    // for (let i = 0; i < moves.length; i++) {
    //     if (map.has(moves[i])) {
    //         map.set(moves[i], map.get(moves[i]) + 1);
    //     } else {
    //         map.set(moves[i], 1);
    //     }
    // }
    //
    // return map.get('R') === map.get('L') && map.get('U') === map.get('D');
};

console.log(judgeCircle('LL'));
console.log(judgeCircle('UD'));
