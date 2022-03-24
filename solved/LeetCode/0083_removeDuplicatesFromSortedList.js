/*
LeetCode 83 - Remove Duplicates from Sorted List - Easy

Given the head of a sorted linked list, delete all duplicates such that
each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
*/

/*
Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
*/

const deleteDuplicates = (head) => {
    let current = head;

    while (current) {
        if (current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

// 136ms, faster than 11.60% of js submissions
// 44.4mb, less than 37.07% of js submissions
