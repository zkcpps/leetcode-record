/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let cura = headA;
  let curb = headB;
  while (cura !== curb) {
    cura = cura !== null ? cura.next : headB;
    curb = curb !== null ? curb.next : headA;
  }
  return cura;
};
// @lc code=end
