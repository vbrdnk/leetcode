/**
 * Represents a HashMapNode.
 * @constructor
 */
class HashMapNode {
    /**
     * Create a node.
     * @param {number} key
     * @param {number} value
     * @param {HashMapNode} next
     */
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

/**
 * Represents a HashMap.
 * @constructor
 */
class MyHashMap {
    /**
     * Create a map.
     */
    constructor() {
        this.size = 19997
        this.buckets = new Array(this.size);
        this.mult = 12582917;
    }

    /**
     * Creates a hash to a given key
     * @param {number} key
     * @param {number} value
     * @return {number} - Index where to place the value for a given key
     */
    hash(key) {
        return key * this.mult % this.size;
    }

    /**
     * Inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put = function(key, value) {
        const idx = this.hash(key);

        if (!this.buckets[idx]) {
            this.buckets[idx] = new HashMapNode(key, value);
        } else if (this.buckets[idx].key === key) {
            this.buckets[idx].value = value;
        } else {
            let currNode = this.buckets[idx];
            while (currNode.next) {
                if (currNode.next.key === key) {
                    currNode.next.value = value;
                    return;
                }

                currNode = currNode.next;
            }
        }
    };

    /**
     * @param {number} key
     * @return {number} The value to which the specified key is mapped, or -1 if this map contains no mapping for the key
     */
    get = function(key) {
        const idx = this.hash(key);

        if (!this.buckets[idx]) {
            return -1;
        } else {
            let currentNode = this.buckets[idx];
            while (currentNode) {
                if (currentNode.key === key) {
                    return currentNode.value;
                }
                currentNode = currentNode.next;
            }

            return -1;
        }
    };

    /**
     * Removes the key and its corresponding value if the map contains the mapping for the key
     * @param {number} key
     * @return {void}
     */
    remove = function(key) {
        const idx = this.hash(key);
        let node = this.buckets[idx];

        if (!node) return;

        if (node.key === key) {
            this.buckets[idx] = node.next;
        } else {
            for (; node.next; node = node.next) {
                if (node.next.key === node.next) {
                    node.next = node.next.next;
                    return;
                }
            }
        }
    };
};


