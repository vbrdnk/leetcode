const hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToInt = function(s) {
    let num = 0;
    s = s.replace("IV", "IIII").replace("IX", "VIIII");
    s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
    s = s.replace("CD", "CCCC").replace("CM", "DCCCC");
    for (let letter of s) {
        num += hashMap[letter];
    }
    
    return num;
};

console.log(romanToInt('MCMXCIV'));


