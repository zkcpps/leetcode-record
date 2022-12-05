/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start

function handleNums(list, temp, nums) {
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) continue;
    temp.push(nums[i]);
    handleNums(list, temp, nums);
    temp.pop();
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let list = [];
  handleNums(list, [], nums);
  return list;
};
// @lc code=end
