/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
    const map = new Map();
    let ans = [];
    let minSum = Number.MAX_VALUE;


    for (let [idx, value] of list1.entries()) {
        map.set(value, idx);
    }

    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            const sum = map.get(list2[i]) + i;

            if (sum < minSum) {
                ans = [];
                ans.push(list2[i]);
                minSum = sum;
            } else if (sum === minSum ){
                ans.push(list2[i])
            }
        }
    }

    return ans;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])); // ['Shogun']
console.log(findRestaurant(["happy","sad","good"], ["sad","happy","good"])); // ['sad', 'happy']
