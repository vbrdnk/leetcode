/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function(image) {
  return image.map(row => {
   return row.reverse().map(num => num ^ 1);
  });
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));

