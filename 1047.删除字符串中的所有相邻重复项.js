/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let len = s.length;
  let stack = [s[0]];
  for (let i = 1; i < len; i++) {
    let item = stack.pop();
    if (item !== s[i]) {
      stack.push(item);
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
// @lc code=end
