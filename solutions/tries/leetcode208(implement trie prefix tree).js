class TrieNode {
    _isEnd;

    constructor() {
        this.children = new Map();
    }

    set isEnd(val) {
        this._isEnd = val;
    }

    get isEnd() {
        return this._isEnd;
    }
}

class Trie {
    constructor(props) {
        this.root = new TrieNode();

    }

    insert(word) {
        let node = this.root;

        for (const c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }

            node = node.children.get(c);
        }

        node.isEnd = true;
    }

    search(word) {
        let node = this.searchPrefix(word);
        return node !== null && !!node.isEnd;
    }

    searchPrefix(word) {
        let node = this.root;

        for (const c of word) {
            if (node.children.has(c)) {
                node = node.children.get(c);
            } else {
                return null;
            }
        }

        return node;
    }

    startsWith(prefix) {
        let node = this.searchPrefix;
        return node !== null;

    }
}

const trie = new Trie();
trie.insert('apple');
console.log(trie.search('apple'));
console.log(trie.search('app'));
console.log(trie.startsWith('a'));
