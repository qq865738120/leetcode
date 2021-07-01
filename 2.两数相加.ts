/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode = new ListNode()
  let lr = result;
  let carry = 0
  if (!l1 || !l2) {
    return result.next
  }
  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10)
    sum = sum % 10
    lr.next = new ListNode(sum)
    lr = lr.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }
  if (carry === 1) {
    lr.next = new ListNode(carry)
  }
  return result.next
}
// @lc code=end

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  /**
   * toArray
   */
  public toArray() {
    let list = new ListNode(this.val, this.next)
    const arr = [list.val]
    while (list.next) {
      arr.push(list.next.val)
      list = list.next
    }
    return arr
  }
}

let l1 = new ListNode(9)
l1.next = new ListNode(8)
let l2 = new ListNode(5)
l2.next = new ListNode(3)
console.log(addTwoNumbers(l1, l2)?.toArray());
