class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = [...rectangle];
        this.rows = rectangle.length;
        this.cols = rectangle[0].length;
        this.updates = [];
    }

    updateSubrectangle(row1, col1, row2, col2, newValue) {
        while (this.updates.length > 0) {
            const top = this.updates[this.updates.length - 1];
            const [topRow1, topCol1, topRow2, topCol2, topVal] = top;

            // If possible eat the previous smaller rectangles
            if (topRow1 >= row1 && topCol1 >= col1 && topRow2 <= row1 && topCol2 <= col1) {
                this.updates.pop();
            }
            else {
                break;
            }
        }

        this.updates.push([row1, col1, row2, col2, newValue]);
    }

    getValue(row, col) {
        for (let i = this.updates.length - 1; i >= 0; i--) {
            const [startRow, startCol, endRow, endCol, newVal] = this.updates[i];

            if (this.withinBound(row, col, startRow, startCol, endRow, endCol)) {
                return newVal;
            }
        }

        return this.rectangle[row][col];
    }

    withinBound(row, col, startRow, startCol, endRow, endCol) {
        return row >= startRow && col >= startCol && row <= endRow && col <= endCol;
    }
}
