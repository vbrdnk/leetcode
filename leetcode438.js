/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 const arraysAreEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    
    return true;
}
const findAnagrams = function(s, p) {
    const sArr = new Array(26).fill(0);
    const pArr = new Array(26).fill(0);
    
    const result = [];
    
    for (let i = 0; i < p.length; i++) {
        let idx = p.charCodeAt(i) % 26;
        pArr[idx]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) % 26;
        sArr[idx]++;
        
        if (i > p.length - 1) {
            let headIdx = s.charCodeAt(i - (p.length)) % 26;
            sArr[headIdx]--;
        }
        
        if (i >= p.length -1) {
            if (arraysAreEqual(sArr, pArr)) result.push(i - (p.length - 1));
        }
    }
    
    return result;
};