/**
 * @param {number} numRows
 * @return {number[][]}
 */
 const generate = function(numRows) {
    if (numRows < 1) return [];
    if (numRows === 1) return [[1]];
    
    const triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        
        const currRow = [1];
        
        for (let j = 1; j < prevRow.length; j++) {
            currRow[j] = prevRow[j] + prevRow[j - 1];
        }
        
        currRow.push(1);
        
        triangle.push(currRow);
    }
    
    return triangle;
}