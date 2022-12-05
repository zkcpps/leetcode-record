/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  for (let i = slow; i < fast; i++) {
    nums[i] = 0;
  }
  return nums;
};
// @lc code=end
