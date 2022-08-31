/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = function(s) {
  // with ASCII code
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      s = s.replace(s[i], String.fromCharCode(charCode + 32));
    }
  }

  return s;
};

const toLowerCase2 = function(s) {
  // build-in JS method
  return s.split('').map(letter => letter.toLowerCase()).join('');
}

console.log(toLowerCase('Hello')); // 'hello'
