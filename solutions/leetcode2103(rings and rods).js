/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function(rings) {
    if (rings.length === 0) return 0;

    let rodesMap = new Map()

    for (let i = 0; i < rings.length; i += 2) {
        let color = rings[i];
        let rode = rings[i + 1];

        if (rodesMap.has(rode)) {
            rodesMap.get(rode).add(color);
        } else {
            rodesMap.set(rode, new Set([color]));
        }
    }

    let count = 0;


   for (let set of rodesMap.values()) {
       if (set.size === 3) {
           count++;
       }
   }

    return count;
};

console.log(countPoints("B0B6G0R6R0R6G9")); // 1
console.log(countPoints("B0R0G0R9R0B0G0")); // 4
