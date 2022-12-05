/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left >= right) return head;

  let dummy = {
    next: head,
  };

  let temp = dummy;

  let num = left;
  while (--num) {
    temp = temp.next;
  }

  // let prev = temp.next;
  // let cur = prev.next;

  // for (let i = 0; i < right - left; i++) {
  //   let next = cur.next;
  //   cur.next = prev;
  //   prev = cur;
  //   cur = next;
  // }

  // temp.next.next = cur;
  // temp.next = prev;

  // return dummy.next;

  let pre = temp.next;
  let cur = pre.next;

  for (let i = 0; i < right - left; ++i) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  temp.next.next = cur;
  temp.next = pre;

  return dummy.next;
};
// @lc code=end
