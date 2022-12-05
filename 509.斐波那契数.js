/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let one = 0;
  let two = 1;
  for (let i = 2; i <= n; i++) {
    ret = one + two;
    i % 2 === 0 ? (one = ret) : (two = ret);
  }
  return n < 2 ? n : ret;
};
// @lc code=end
