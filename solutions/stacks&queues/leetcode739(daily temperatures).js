/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop();
            answer[j] = i - j;
        }

        stack.push(i);
    }

    return answer;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
