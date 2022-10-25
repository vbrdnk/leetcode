class TrieNode {
    constructor() {
        this.children = new Map();
        this.suggestions = [];
    }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function (products, searchWord) {
    let root = new TrieNode();

    for (const product of products) {
        let node = root;

        for (const c of product) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }

            node = node.children.get(c);

            node.suggestions.push(product);
            node.suggestions.sort();

            if (node.suggestions.length > 3) {
                node.suggestions.pop();
            }
        }
    }


    let ans = [];
    let node = root;

    for (const c of searchWord) {
        if (node.children.has(c)) {
            node = node.children.get(c);
            ans.push(node.suggestions);
        } else {
            node.children = new Map();
            ans.push([]);
        }
    }

    return ans;
};

console.log(suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], 'mouse')); // [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
