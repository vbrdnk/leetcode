/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (this.map.has(key)) {
            let val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        } else {
            return -1;
        }

    }

    put(key, value) {
        if (this.get(key) === -1) {
            if (this.capacity === this.map.size) {
                for (let keyVal of this.map) {
                    this.map.delete(keyVal[0]);
                }
            }
        }

        this.map.set(key, value);
    }
}
