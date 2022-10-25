/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
const maximizeSweetness = function(sweetness, k) {
    let numberOfPeople = k + 1;
    let left = Math.min(...sweetness);
    let right = Math.floor(sweetness.reduce((x, y) => x + y ) / numberOfPeople);

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        let currSweetness = 0;
        let peopleWithChocolate = 0;

        for (const s of sweetness) {
            currSweetness += s;

            if (currSweetness >= mid) {
                peopleWithChocolate += 1;
                currSweetness = 0;
            }
        }

        if (peopleWithChocolate >= numberOfPeople) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return right;
};

console.log(maximizeSweetness([1,2,3,4,5,6,7,8,9], 5)); // 6;
// console.log(maximizeSweetness([5,6,7,8,9,1,2,3,4], 8)); // 1
