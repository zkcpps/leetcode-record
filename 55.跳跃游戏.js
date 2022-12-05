/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cur = 0;
  for (let i = 0; i <= cur; i++) {
    cur = Math.max(cur, i + nums[i]);
    if (cur >= nums.length - 1) return true;
  }
  return false;
};
// @lc code=end
