/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // if (nums[0] >= 0) {
  //   // 正整数
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] *= nums[i];
  //   }
  // } else if (nums[nums.length - 1] < 0) {
  //   const len = nums.length;
  //   for (let i = 0; i < len; i++) {
  //     let num = nums[i + i];
  //     nums.unshift(num * num);
  //   }
  //   for (let i = 0; i < len; i++) {
  //     nums.pop();
  //   }
  // } else {
  //   let right = nums.length - 1;
  //   let left = 0;
  //   while (right >= left + 1) {
  //     let lnum = nums[left] * nums[left];
  //     let rnum = nums[right] * nums[right];
  //     if (rnum === 0) {
  //       nums.splice(right, 1);
  //       nums.unshift(0);
  //       left++;
  //     } else if (lnum <= rnum) {
  //       nums[right] = rnum;
  //       right--;
  //     } else {
  //       nums[left] = nums[right];
  //       nums[right] = lnum;
  //       right--;
  //     }
  //   }
  //   nums[left] = nums[left] * nums[left];
  // }

  // return nums;
  return nums.map((num) => num * num).sort((a, b) => a - b);
};
// @lc code=end
