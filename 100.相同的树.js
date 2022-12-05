/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 递归解法
  // if (p === null && q === null) return true;
  // if (!p || !q) return false;
  // if (p.val !== q.val) return false;
  // return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  // 迭代解法
  if (p === null && q === null) return true;
  if (!p || !q) return false;
  let tp = [p];
  let tq = [q];
  while (tq.length && tp.length) {
    let pp = tp.pop();
    let qq = tq.pop();
    if (pp.val !== qq.val) return false;
    if (pp.left && qq.left) {
      tq.push(qq.left);
      tp.push(pp.left);
    } else if (pp.left || qq.left) {
      return false;
    }

    if (pp.right && qq.right) {
      tq.push(qq.right);
      tp.push(pp.right);
    } else if (pp.right || qq.right) {
      return false;
    }
  }

  return tq.length === 0 && tp.length === 0;
};
// @lc code=end
