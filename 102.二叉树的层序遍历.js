/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [root];
  while (stack.length > 0) {
    let levelLen = stack.length;
    let curLevel = [];
    while (levelLen-- > 0) {
      let node = stack.shift();
      curLevel.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    res.push(curLevel);
  }
  return res;
};
// @lc code=end
