/**
 * @param {number} n
 */
const OrderedStream = function(n) {
    this.hashTable = [];
    this.pointer = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let possbileChunk = [];
    this.hashTable[idKey - 1] = value;

    while (this.hashTable[this.pointer]) {
        possbileChunk.push(this.hashTable[this.pointer]);
        this.pointer++;
    }

    return possbileChunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
