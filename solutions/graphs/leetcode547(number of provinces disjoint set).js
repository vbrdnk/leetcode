class UnionFind {
    /**
     * Create a set where each node is parent for itself.
     */
    constructor(size) {
        this.set = new Array(size);
        this.rank = new Array(size);
        this.count = size;

        for (let i = 0; i < size; i++) {
            this.set[i] = i;
            this.rank[i] = 1;
        }
    }

    /**
     * Find a root node to a given key
     * @param {number} num
     * @return {number} - Parent node
     */
    find(num) {
        while (num !== this.set[num]) {
            num = this.set[num];
        }

        return num;
    }

    /**
     * If the roots of provided key are not the same, sets one node as a parent of another
     * @param {number} x
     * @param {number} y
     * @return {void}
     */
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.set[rootY] = rootX;
            } else if (this.set[rootX] < this.set[rootY]) {
                this.set[rootX] = rootY;
            } else {
                this.set[rootY] = rootX;
                this.rank[rootX] += 1;
            }

            this.count--;
        }
    }
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
    if (!isConnected.length) {
        return 0;
    }

    const disjointSet = new UnionFind(isConnected.length);
    const len = isConnected.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (isConnected[i][j] === 1) {
                disjointSet.union(i, j);
            }
        }
    }

    return disjointSet.count;
};

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])); // 2

