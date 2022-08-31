/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    if (rowIndex < 1) return [1];
   

    const triangle = [[1]];
    
    for (let i = 1; i <= rowIndex; i++) {
        const prevRow = triangle[i - 1];
        
        const currRow = [];
        currRow.push(1);
        for (let j = 1; j < prevRow.length; j++) {
            currRow[j] = prevRow[j] + prevRow[j - 1];
        }
        
        currRow.push(1);
        triangle.push(currRow);
    }
    
    return triangle[rowIndex];
    
};