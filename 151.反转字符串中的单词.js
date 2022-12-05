/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let len = s.length;
  let num = 0;
  let word = "";
  for (let i = 0; i < len; i++) {
    if (s[i] === " ") {
    } else {
      num++;
    }
  }
};
// @lc code=end
