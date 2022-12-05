/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // let num = 0;
  // let j = 0;
  // g.sort((a, b) => a - b);
  // s.sort((a, b) => a - b);
  // for (let i = 0; i < g.length; ) {
  //   if (j < s.length) {
  //     if (g[i] <= s[j]) {
  //       num++;
  //       i++;
  //     }
  //     j++;
  //   } else {
  //     break;
  //   }
  // }
  // return num;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let num = 0;
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    if (index >= 0 && s[index] >= g[i]) {
      num++;
      index--;
    }
  }
  return num;
};
// @lc code=end
