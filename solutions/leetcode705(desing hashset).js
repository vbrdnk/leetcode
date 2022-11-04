class MyHashSet {
    constructor() {
        this.set = {};
    }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set[key] = true;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove = function(key) {
        delete this.set[key];
    };

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains = function(key) {
        return this.set.hasOwnProperty(key);
    };
}
