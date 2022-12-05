/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const arr = [];
  function dfs(node) {
    if (!node) return;
    node.left && dfs(node.left);
    arr.push(node);
    node.right && dfs(node.right);
  }
  dfs(root);

  let first;
  let second;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i + 1].val) {
      if (!first) {
        first = arr[i];
      }
      second = arr[i + 1];
    }
  }

  [first.val, second.val] = [second.val, first.val];

  return root;
};
// @lc code=end
