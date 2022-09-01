const inorderSuccessor = function(root, p) {
    // check if p has right subtree
    if (p.right) {
        let curr = p.right;
        let prev = null;

        while (curr) {
            prev = curr;
            curr = curr.left;
        }

        return prev;
    }

    // if p does not have right subtree
    let curr = root;
    let prev = null;

    while (curr !== p) {
        if (p.val < curr.val) {
            prev = curr;
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }

    return prev;
}
