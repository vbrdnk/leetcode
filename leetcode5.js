// O(n2)

const getDome = function(left, right, s) {
    while (left >= 0 && right <= s.length) {
        if (s[left] !== s[right]) {
            break;
        }
        left--;
        right++;
    }

    return [left + 1, right]; 
}

const longestPalindrome = function(s) {
    // base case where s.length is 1;
    let max = [0, 1];

    for (let i = 0; i < s.length; i++) {
        let even = getDome(i - 1, i, s);
        let odd = getDome(i - 1, i + 1, s);
        let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        
        // compare max with currrentIteration max
        max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
    }


    const [start, end] = max;
    return s.slice(start, end);
   
}

console.log(longestPalindrome('babad'));


