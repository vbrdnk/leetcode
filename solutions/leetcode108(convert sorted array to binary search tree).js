/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 const sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
    if (left > right) return null;
    
    let mid = Math.floor(left + (right - left) / 2);
    const root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBST(nums, left, mid -1);
    root.right = sortedArrayToBST(nums, mid + 1, right);
    
    return root;
};