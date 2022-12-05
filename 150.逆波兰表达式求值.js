/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const calc = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "*": (a, b) => a * b,
    "/": (a, b) => (b / a) | 0,
  };
  let stack = [];
  tokens.forEach((t) => {
    if (t in calc) {
      stack.push(calc[t](stack.pop(), stack.pop()));
    } else {
      stack.push(Number(t));
    }
  });
  return stack;
};
// @lc code=end
