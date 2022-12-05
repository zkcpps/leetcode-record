/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (!nums.length) return 0;
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (val !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  return slow;
};
// @lc code=end
