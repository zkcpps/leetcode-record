/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  if (word.length === 0) {
    return true;
  }

  if (board.length === 0) {
    return false;
  }

  var row = board.length;
  var col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const ret = find(i, j, 0);
      if (ret) {
        return ret;
      }
    }
  }
  return false;

  function find(i, j, cur) {
    if (i >= row || i < 0) {
      return false;
    }

    if (j >= col || j < 0) {
      return false;
    }

    let letter = board[i][j];

    if (letter !== word[cur]) {
      return false;
    }

    if (cur === word.length - 1) {
      return true;
    }

    board[i][j] = null;

    const ret =
      find(i + 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j - 1, cur + 1);

    board[i][j] = letter;

    return ret;
  }
};
// @lc code=end
