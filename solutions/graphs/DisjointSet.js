export class QuickFindDisjointSet {
    /**
     * Create a set where each node is parent for itself.
     */
    constructor(size) {
        this.set = new Array(size);

        for (let i = 0; i < size; i++) {
            this.set[i] = i;
        }
    }

    /**
     * Find a root node to a given key
     * @param {number} num
     * @return {number} - Parent node
     */
    find(num) {
        return this.set[num];
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
            for (let i = 0; i < this.set.length; i++) {
                if (this.set[i] === rootY) {
                    this.set[i] = rootX;
                }
            }
        }
    }

    /**
     * Checks if two nodes are connected
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

export class QuickUnionDisjointSet {
    /**
     * Create a set where each node is parent for itself.
     */
    constructor(size) {
        this.set = new Array(size);

        for (let i = 0; i < size; i++) {
            this.set[i] = i;
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
           this.set[rootY] = rootX;
        }
    }

    /**
     * Checks if two nodes are connected
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

export class QuickUnionByRankDisjointSet {
    /**
     * Create a set where each node is parent for itself.
     */
    constructor(size) {
        this.set = new Array(size);
        this.rank = new Array(size);

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
        }
    }

    /**
     * Checks if two nodes are connected
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

