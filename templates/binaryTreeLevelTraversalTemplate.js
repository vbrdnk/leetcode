const binaryTreeLevelOrderTemplate = (root) => {
    if (!root) {
        return [];
    }
    
    let queue = [root];
    let result = [];
    
    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));
        
        while (len--) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
}