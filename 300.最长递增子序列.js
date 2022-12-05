/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let len = nums.length;
  if (!len) return 0;
  // let dp = Array(len).fill(1);
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // return Math.max(...dp);

  let arr = [nums[0]];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > arr[arr.length - 1]) {
      arr.push(num);
    } else {
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (arr[mid] >= num) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      arr[left] = num;
    }
  }

  return arr.length;
};
// @lc code=end
