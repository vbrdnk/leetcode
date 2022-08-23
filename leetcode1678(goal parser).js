/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
  let result = '';
  let symbols = command.split('');

  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] === 'G') {
      result += 'G';
    } else {
      if (symbols[i] === '(') {
        if (symbols[i + 1] === ')') {
          result += 'o';
          i++;
        } else {
          result += 'al';
          i += 3;
        }
      }
    }
  }

  return result;
};

console.log(interpret('G()()()()(al)'));
